// implement a cutom awaited utility type to unwrap Promise types

// restrict T to be a Promise-like type(having a 'then' method)

type MyAwaited<T extends PromiseLike<any>> =
// use infer U to extract the inner resolved type
T extends PromiseLike<infer U> ? U extends PromiseLike<any> ? MyAwaited<U> : U
// fallback if T is not a Promise(should not be reached due to contraint):
  : never

// about use infer:  T extends Promise<infer U> ? U : never is work, but for actual business,
// it may run into nested Promise, like Promise<Promise<string>>.

// PromiseLike: more in line with real-world engineering environments
