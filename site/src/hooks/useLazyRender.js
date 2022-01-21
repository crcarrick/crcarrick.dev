import React from 'react'

export const useLazyRender = ({ rootMargin = '200px 0px', threshold = 0.1 } = {}) => {
  const [shouldRender, setShouldRender] = React.useState(false)
  const [observer, setObserver] = React.useState(null)

  const ref = React.useCallback(
    (element) => {
      if (window && 'IntersectionObserver' in window && element != null) {
        function observe([{ isIntersecting }]) {
          if (isIntersecting) {
            setShouldRender(true)

            intersectionObserver.disconnect()
          }
        }

        const intersectionObserver = new IntersectionObserver(observe, {
          rootMargin,
          threshold,
        })

        intersectionObserver.observe(element)

        setObserver(intersectionObserver)
      }
    },
    [rootMargin, threshold]
  )

  React.useEffect(() => () => observer && observer.disconnect(), [observer])

  return { ref, shouldRender }
}
