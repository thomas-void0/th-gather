import { ExtraMsg, Msg } from '../typings';
export declare const getSessionStorage: () => Msg[] | Array<any>;
/**
 * 上报数据数据
 * @param data Msg
 * @param action boolean 是否要立即进行数据上报
 */
export default function dispatchData(data: ExtraMsg): void;
