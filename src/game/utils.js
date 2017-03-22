export function runIfDev(func) {
  if (process.env.NODE_ENV === 'development') {
    func();
  }
}

export default function (objects) {
  return objects.forEach(object => object.anchor.setTo(0.5));
}
