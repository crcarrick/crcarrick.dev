const size = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
};

export const breakpoint = Object.entries(size).reduce(
  (devices, [device, width]) => ({
    ...devices,
    [device]: `@media screen and (min-width: ${width})`,
  }),
  {}
);

export const transition = (...properties) => {
  const base = `0.3s ease 0s`;

  return properties.reduce(
    (transition, property, index) =>
      index === 0 ? `${property} ${base}` : `${transition}, ${property} ${base}`,
    ``
  );
};

export const adjust = (color, amount) => {
  let usePound = false;

  if (color[0] === '#') {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

export const hexToRgba = (hex, opacity = 1) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return `rgb(${r}, ${g}, ${b}, ${opacity})`;
  }

  return null;
};
