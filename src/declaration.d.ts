import { KEY } from './config';
import Store from './libs/store';
import { Msg, Options } from './typings';

declare global {
  interface Window {
    [KEY]: {
      /* 存储仓库 */
      store: Store<Msg[]>;
      /* 需要合并的数据 */
      merge?: Record<string, any>;
    } & Options;
  }
}
