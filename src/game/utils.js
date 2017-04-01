export function runIfDev(func) {
  if (process.env.NODE_ENV === 'development') {
    func();
  }
}

export function centerGameObjects(objects) {
  return objects.forEach(object => object.anchor.setTo(0.5));
}

export default {};
