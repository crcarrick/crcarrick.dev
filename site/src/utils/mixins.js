export const size = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
}

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
)

export const transition = (...properties) => {
  const base = `0.3s ease 0s`

  return properties.reduce(
    (transition, property, index) =>
      index === 0 ? `${property} ${base}` : `${transition}, ${property} ${base}`,
    ``
  )
}
