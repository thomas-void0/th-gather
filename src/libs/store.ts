// 创建变量存储空间
class Store<T = any> {
  value: T;
  constructor(initValue: T) {
    this.value = initValue;
  }

  /**
   * 设置存储的数据
   */
  set(data: T): void {
    this.value = data;
  }

  /**
   * 获取存储的数据
   */
  get(): T {
    return this.value;
  }

  /**
   * 清除存储的数据
   */
  clear(): void {
    this.value = null;
  }
}

export default Store;
