export function getAssetUrl(name) {
  if (process.env.NODE_ENV === 'development') {
    return `/${name}`;
  } else {
    return `/text-editor/${name}`;
  }
}
