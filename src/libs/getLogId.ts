import SnowflakeId from 'snowflake-id';

const snowflake = new SnowflakeId({
  mid: 42,
  offset: (2022 - 1970) * 31536000 * 1000,
});

// 生成每一条数据对应的id
const getLogId = (): string => {
  return snowflake.generate();
};

export default getLogId;
