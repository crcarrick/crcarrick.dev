type FetchParameters = Parameters<typeof fetch>

function isRequestString(val: RequestInfo | URL): val is string {
  return typeof val === 'string'
}

function isRequestObject(val: RequestInfo | URL): val is Request {
  return typeof val !== 'string'
}

// monkey patch fetch to figure out the hostname
export async function localFetch(...params: FetchParameters) {
  const [localURL, options] = params

  const BASE =
    process.env.NODE_ENV === 'production'
      ? 'https://crcarrick.dev'
      : 'http://localhost:3000'

  let url: RequestInfo | URL

  if (isRequestObject(localURL)) {
    url = {
      ...localURL,
      url: `${BASE}${localURL}`,
    }
  } else if (isRequestString(localURL)) {
    url = `${BASE}${localURL}`
  } else {
    url = {
      ...localURL,
      host: BASE,
    }
  }

  return fetch(url, options)
}
