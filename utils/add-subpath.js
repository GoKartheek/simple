export default (url, subpath) => {
  url
  .replace('/', `/${subpath}/`)
  .replace(/(https?:\/\/)|(\/)+/g, "$1$2")
  .replace(/\/$/, '')
}