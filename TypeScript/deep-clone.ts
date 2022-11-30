/* Spread { ... } will only shallow clone objects. If those objects have properties then they'll be treated as a reference.
One approach is to use JSON.parse(JSON.stringify(thing), but this is not performant and frankly it's ewwww... 
The code below offers a better solution to this problem. */

interface IClonable {
  clone(): object;
}

(Object.prototype as any).clone = function (): Record<string, any> {
  const item = this as Record<string, any>;
  const clone = { ...item };
  const keys = Object.keys(item);
  for (const key of keys) {
    const property = item[key];
    clone[key] = property instanceof Object ? { ...property } : property;
  }
  return clone;
};
