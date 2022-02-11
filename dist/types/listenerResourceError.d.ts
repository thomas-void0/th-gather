import { ErrorMsg } from './typings';
export declare function jsError(error: ErrorEvent): ErrorMsg;
export declare function resourceError(e: any): ErrorMsg;
declare const listenerResourceError: () => void;
export default listenerResourceError;
