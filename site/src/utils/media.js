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
