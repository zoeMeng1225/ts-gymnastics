// Implement the util type If<C,T,F>

// C extends boolean, strictly cntrains C to only accept true or false
// C extends true ? T : F bahaves exactly like a ternary operator

type If<C extends boolean, T, F> = C extends true ? T : F
