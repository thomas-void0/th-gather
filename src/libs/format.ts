const format = (dataTime?:number): string => {
  const d = dataTime ? new Date(dataTime) : new Date();

  return `${d.getFullYear()}-${
    d.getMonth() + 1
  }-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`;
};

export default format;
