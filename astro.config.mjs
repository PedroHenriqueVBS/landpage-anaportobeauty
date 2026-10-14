import { defineConfig } from "astro/config";
import { writeFile } from "node:fs/promises";

const configuredSite =
  process.env.SITE_URL?.trim() || "https://anaportobeauty.com.br";
const parsedSite = new URL(configuredSite);

if (
  !["https:", "http:"].includes(parsedSite.protocol) ||
  parsedSite.pathname !== "/" ||
  parsedSite.username ||
  parsedSite.password ||
  parsedSite.search ||
  parsedSite.hash
) {
  throw new Error(
    "SITE_URL deve conter apenas o domínio HTTP(S) real do site, sem caminho, credenciais ou parâmetros.",
  );
}
const site = parsedSite.origin;

// Usa o domínio oficial; SITE_URL permite ajustar a origem em outro ambiente.
export default defineConfig({
  site,
  trailingSlash: "always",
  output: "static",
  devToolbar: { enabled: false },
  integrations: [
    {
      name: "alporto-sitemap",
      hooks: {
        "astro:build:done": async ({ dir, pages }) => {
          const entries = pages.map(({ pathname }) => {
            const location = new URL(pathname, `${site}/`).href
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&apos;");
            return `  <url><loc>${location}</loc></url>`;
          });
          const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
          await writeFile(new URL("sitemap.xml", dir), sitemap, "utf8");
        },
      },
    },
  ],
});
