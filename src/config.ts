import { BaseMsg } from './typings';

export const KEY = '$$_th_gather';
export const MSG_KEY = '$$_th_gather_list';
export const MERGE_KEY = '$$_th_gather_merge_key';
export const defaultGatherKeys: (keyof BaseMsg)[] = [
  'key',
  'o',
  'ua',
  'ul',
  'ct',
  'vp',
  'sr',
  'logId',
  'gmt',
  'dpr',
  'rf',
];
