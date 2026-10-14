import { createHash } from "node:crypto";
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

// Somente arquivos com hash recebem cache imutável; HTML continua revalidando.
export async function versionStaticAssets(directory) {
  const root = fileURLToPath(directory);
  const replacements = new Map();
  await mkdir(join(root, "media"), { recursive: true });
  for (const folder of ["images", "fonts"]) {
    for (const name of await readdir(join(root, folder))) {
      if (!/\.(webp|woff2)$/.test(name)) continue;
      const bytes = await readFile(join(root, folder, name));
      const hash = createHash("sha256")
        .update(bytes)
        .digest("hex")
        .slice(0, 16);
      const extension = extname(name);
      const versioned = `${basename(name, extension)}.${hash}${extension}`;
      await writeFile(join(root, "media", versioned), bytes);
      replacements.set(`/${folder}/${name}`, `/media/${versioned}`);
    }
  }
  async function rewrite(folder) {
    for (const entry of await readdir(folder, { withFileTypes: true })) {
      const path = join(folder, entry.name);
      if (entry.isDirectory()) {
        if (!["media", "images", "fonts"].includes(entry.name))
          await rewrite(path);
      } else if (/\.(html|css)$/.test(entry.name)) {
        let content = await readFile(path, "utf8");
        for (const [original, versioned] of replacements) {
          content = content.replaceAll(original, versioned);
        }
        await writeFile(path, content);
      }
    }
  }
  await rewrite(root);
}
