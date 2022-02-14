declare type Merge<T, U, X = Pick<U, Exclude<keyof U, keyof T & keyof U>>> = Pick<T & X, keyof T | keyof X>;
export default Merge;
