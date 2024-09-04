
# Post Revolution Graffiti/Murals Bangaldesh

A simple responsive web application in React JS to showcase the post revolution street art drawn by the students and general population.

Link to the hosted site -> [Post Revolution Bangladesh](https://post-rev-bangladesh.github.io/)

## Features

- Showcase different street artwork done by people
- Submit artwork
- Details available on each art based on submissions
- By default the images are small in size for faster load, clicking on each will load the full sized image
- The tiles are displayed using a masonry layout


## Installation
As it is a simple vite react application. It can be run having node js installed and doing the simple npm install while at project root.

```bash
  npm i
```
    
## Documentation

There is a process to go through to generate lower scaled images for the thumbnails to be displayed. While other options maybe viable, I am using a simple code using the Sharp npm package to generate my thumbnails. 

The script is given below. The script assumes there will be a folder called graffiti_images with images in it to generate thumbnails from. The outputted images will be stored in another folder called graffiti_thumnails. The quality parameter is also inside the code, feel free to change it if needed.

```javascript
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
        .jpeg({ quality: 30 }) // Set JPEG quality to your desired value
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
```


## Authors
This is a collaborative project authored by Asef Hossain Khan (me), Ehtashamul Haque Tamim, Sirajum Munira Shifat, Muzammel Hossain Chisty and others.


## Contributing

Contributions are always welcome!
