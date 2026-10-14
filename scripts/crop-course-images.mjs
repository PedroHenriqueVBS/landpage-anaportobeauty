import sharp from "sharp";
import { fileURLToPath } from "node:url";

const directory = new URL("../public/images/", import.meta.url);
const source = fileURLToPath(new URL("curso-1024.webp", directory));
// Recortes das fotos na arte oficial, sem textos e sem ampliar a resolução original.
const crops = {
  braid: { left: 590, top: 225, width: 390, height: 435 },
  half: { left: 60, top: 1138, width: 222, height: 184 },
  pony: { left: 310, top: 1138, width: 228, height: 184 },
};
for (const [variant, crop] of Object.entries(crops)) {
  for (const width of [Math.round(crop.width / 2), crop.width]) {
    await sharp(source)
      .extract(crop)
      .resize({ width })
      .webp({ quality: 85 })
      .toFile(
        fileURLToPath(new URL(`curso-${variant}-${width}.webp`, directory)),
      );
  }
}
