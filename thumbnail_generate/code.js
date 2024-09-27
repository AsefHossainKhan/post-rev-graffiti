/* eslint-disable no-undef */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imagesDir = "graffiti_images";
const thumbnailsDir = "graffiti_thumbnails";

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir);
}

// Get a list of all image files in the images directory
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    // Check if the file is an image
    if (
      file.endsWith(".jpg") ||
      file.endsWith(".jpeg") ||
      file.endsWith(".png") ||
      file.endsWith(".JPEG")
    ) {
      const imagePath = path.join(imagesDir, file);
      if (file.endsWith("JPEG")) {
        file = file.replace("JPEG", "jpg");
      }
      if (file.endsWith("jpeg")) {
        file = file.replace("jpeg", "jpg");
      }
      const thumbnailPath = path.join(thumbnailsDir, file);

      // Generate thumbnail using sharp
      sharp(imagePath)
        .jpeg({ quality: 30 }) // Set JPEG quality to 30
        .toFile(thumbnailPath, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log(`Generated thumbnail for ${file}`);
          }
        });
    }
  });
});
