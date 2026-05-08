// implement a custom readonly utility type to make all properties in T unassignable

// 1.interate over all keys of T using 'keyof T' and 'in'
// 2.add the readonly modifier before the key
// 3. keep the originak value type T[P]

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
