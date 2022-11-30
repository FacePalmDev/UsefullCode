/* Spread { ... } will only shallow clone objects. If those objects have properties then they'll be treated as a reference.
One approach is to use JSON.parse(JSON.stringify(thing), but this is not performant and frankly it's ewwww... 
The code below offers a better solution to this problem. */

export class DeepCloner<T> extends Object {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(private subject: T) {
    super();
  }

  public deepClone(): T {
    const clone = { ...this.subject };
    const keys = Object.keys(this.subject);
    for (const key of keys) {
      const property = this.subject[key];
      clone[key] = property instanceof Object ? { ...property } : property;
    }
    return clone as unknown as T;
  }
}

