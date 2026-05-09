// implement First<T> to extract the first element's type of an array T

// 1.use 'extends' to check if T matches an array pattern with at least one element.
// 2. 'infer First' captures the type of the first element
// 3. '...any' ignores the rest of the elements
type First<T extends any[]> = T extends [infer First, ...any] ? First : never

// is there has other solution if we don't use 'infer'
// solution: use array length

// type First<T extends any[]> = T['length'] extends 0 ? never :T[0]
