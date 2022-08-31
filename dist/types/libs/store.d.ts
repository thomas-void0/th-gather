declare class Store<T = any> {
    value: T;
    constructor(initValue: T);
    /**
     * 设置存储的数据
     */
    set(data: T): void;
    /**
     * 获取存储的数据
     */
    get(): T;
    /**
     * 清除存储的数据
     */
    clear(): void;
}
export default Store;
