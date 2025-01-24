export function convertMillisecondsToMinutes(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export function resizeImage(image) {
  const canvas = document.createElement('canvas');
  const maxWidth = 300; // Set your desired maximum width
  const maxHeight = 500; // Set your desired maximum height

  let width = image.width;
  let height = image.height;

  // Calculate new dimensions while maintaining aspect ratio
  if (width > height) {
    if (width > maxWidth) {
      height *= maxWidth / width;
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width *= maxHeight / height;
      height = maxHeight;
    }
  }

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, width, height);

  // Get the resized image as a data URL
  const resizedImageData = canvas.toDataURL();

  // Do something with the resized image, e.g., display it
  const resizedImage = document.querySelector(".album-art img");
  resizedImage.src = resizedImageData;
  return resizedImage;
}