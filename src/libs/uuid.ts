// 生成每一条数据对应的uuid
const uuid = (): string => {
  return 'xxxxxxxxyxxxyxxxyxxxyxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export default uuid;
