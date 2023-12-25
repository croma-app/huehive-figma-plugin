export function getTextColor(hexColor, lightColor = 'white', darkColor = 'black') {
  // Remove any leading '#' from the hex color
  hexColor = hexColor.replace(/^#/, '');

  // Parse the hex color to RGB
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  // Calculate the relative luminance (brightness)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Choose black or white text color based on luminance
  return luminance > 0.5 ? darkColor : lightColor;
}

export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : null;
}
