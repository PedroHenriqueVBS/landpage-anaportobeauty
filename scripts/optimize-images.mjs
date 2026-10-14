import sharp from "sharp";
import { access, mkdir } from "node:fs/promises";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve a saída pela localização do script, mesmo após mover o projeto.
const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const output = new URL("../public/images/", import.meta.url);
// Mantém as artes oficiais; os enquadramentos são definidos no CSS.
const source = process.env.ANA_IMAGES_DIR
  ? resolve(projectRoot, process.env.ANA_IMAGES_DIR)
  : join(homedir(), "Downloads");
const originals = [
  "WhatsApp Image 2026-08-21 at 19.05.02.jpeg",
  "WhatsApp Image 2026-08-21 at 19.04.58.jpeg",
  "WhatsApp Image 2026-08-21 at 19.04.45.jpeg",
];
// Verifica todos os originais antes de sobrescrever qualquer imagem existente.
try {
  await Promise.all(
    originals.map((filename) => access(join(source, filename))),
  );
} catch {
  throw new Error(
    "Originais do curso não encontrados. Defina ANA_IMAGES_DIR com a pasta das três artes de agosto de 2026. As imagens WebP já presentes no projeto permitem executar e publicar o site sem regenerá-las.",
  );
}
await mkdir(output, { recursive: true });
await Promise.all([
  sharp(`${source}/WhatsApp Image 2026-08-21 at 19.05.02.jpeg`)
    .resize({ width: 1200 })
    .webp({ quality: 82 })
    .toFile(fileURLToPath(new URL("ana-1200.webp", output))),
  sharp(`${source}/WhatsApp Image 2026-08-21 at 19.05.02.jpeg`)
    .resize({ width: 800 })
    .webp({ quality: 80 })
    .toFile(fileURLToPath(new URL("ana-800.webp", output))),
  sharp(`${source}/WhatsApp Image 2026-08-21 at 19.04.58.jpeg`)
    .resize({ width: 1024 })
    .webp({ quality: 85 })
    .toFile(fileURLToPath(new URL("curso-1024.webp", output))),
  sharp(`${source}/WhatsApp Image 2026-08-21 at 19.04.45.jpeg`)
    .resize({ width: 904 })
    .webp({ quality: 82 })
    .toFile(fileURLToPath(new URL("materiais.webp", output))),
]);
