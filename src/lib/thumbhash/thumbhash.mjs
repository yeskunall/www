import { join } from "node:path";
import { rgbaToThumbHash, thumbHashToDataURL } from "thumbhash";
import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { getPixels } from "@unpic/pixels";

const files = await readdir(join(process.cwd(), "src/assets/post"), {
  withFileTypes: true,
});

const images = files.filter(item => !item.isDirectory()).map(item => item.name);

// console.log(join(process.cwd(), "src/assets/post", "social-card.png"));

const pngData = await readFile(
  join(
    process.cwd(),
    "src/assets/post",
    "social-card.png",
    // "solen-feyissa--71m_qQMQMs-unsplash.png"
    // "fabian-moller-gI7zgb80QWY-unsplash.jpeg"
    // "ripe_malinka@2x.png"
  ),
);

// const pngData = await readFile(
//   fileURLToPath(
//     new URL(
//       "./src/assets/post/solen-feyissa--71m_qQMQMs-unsplash.png",
//       process.cwd()
//     )
//   )
// );

// console.log(pngData);
const { data, height, width } = await getPixels(pngData);
const scale = 100 / Math.max(width, height);
const binaryThumbHash = rgbaToThumbHash(
  Math.round(width * scale),
  Math.round(height * scale),
  data,
);
const placeholderURL = thumbHashToDataURL(binaryThumbHash);

// console.log({ data, height, width });
console.log(placeholderURL);

// images.forEach(async (image) => {
//   const pngData = await readFile(
//     join(
//       process.cwd(),
//       "src/assets/post",
//       // "social-card.png"
//       // "fabian-moller-gI7zgb80QWY-unsplash.jpg"
//       "solen-feyissa--71m_qQMQMs-unsplash.jpg"
//     )
//   );

//   const { data, height, width } = await getPixels(pngData);
//   const scale = 100 / Math.max(width, height);
//   const binaryThumbHash = rgbaToThumbHash(
//     Math.round(width * scale),
//     Math.round(height * scale),
//     data
//   );
//   const placeholderURL = thumbHashToDataURL(binaryThumbHash);

//   // console.log({ data, height, width });
//   console.log(placeholderURL);
// });
