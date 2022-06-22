// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
export const isAbsoluteUrl = (url: string) => ABSOLUTE_URL_REGEX.test(url)

export function getLocationOrigin() {
  const { protocol, hostname, port } = window.location
  return `${protocol}//${hostname}${port ? ':' + port : ''}`
}

export function getURL() {
  const { href } = window.location
  const origin = getLocationOrigin()
  return href.substring(origin.length)
}

export function getDisplayName<P>(Component: ComponentType<P>) {
  return typeof Component === 'string'
    ? Component
    : Component.displayName || Component.name || 'Unknown'
}

export function isResSent(res: ServerResponse) {
  return res.finished || res.headersSent
}
