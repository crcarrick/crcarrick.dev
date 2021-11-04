const size = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
};

export const breakpoint = Object.entries(size).reduce(
  (sizes, [sz, width]) => ({
    ...sizes,
    [sz]: `@media screen and (min-width: ${width})`,
  }),
  {
    sm: '',
    md: '',
    lg: '',
  }
);

export const transition = (...properties) => {
  const base = `0.3s ease 0s`;

  return properties.reduce(
    (transition, property, index) =>
      index === 0 ? `${property} ${base}` : `${transition}, ${property} ${base}`,
    ``
  );
};

// yoinked off stack (https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors)
// const adjust = (color, amount) => {
//   const num = parseInt(color, 16);

//   let r = (num >> 16) + amount;

//   if (r > 255) { r = 255 }
//   else if (r < 0) { r = 0 };

//   let b = ((num >> 8) & 0x00ff) + amount;

//   if (b > 255) b = 255;
//   else if (b < 0) b = 0;

//   let g = (num & 0x0000ff) + amount;

//   if (g > 255) g = 255;
//   else if (g < 0) g = 0;

//   return `# ${(g | (b << 8) | (r << 16)).toString(16)}`;
// };

// export const lighten = (color, percent) => adjust(color, percent);
// export const darken  = (color, percent) => adjust(color, -percent);

// export const hexToRgba = (hex, opacity = 1) => {
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

//   if (result) {
//     const r = parseInt(result[1], 16);
//     const g = parseInt(result[2], 16);
//     const b = parseInt(result[3], 16);

//     return `rgba(${r}, ${g}, ${b}, ${opacity})`;
//   }

//   return null;
// };
