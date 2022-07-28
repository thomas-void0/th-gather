import Merge from './libs/merge';
export interface BaseMsg {
    key: string;
    o: string;
    ua: string;
    ul: string;
    ct: string;
    vp: string;
    sr: string;
    uuid: string;
    gmt: string;
    dpr: number;
    rf: string;
}
export interface Performance {
    type: 'performance';
    dns: number;
    tcp: number;
    ttfb: number;
    bt: number;
    dt: number;
    drt: number;
    rt: number;
    lt: number;
    nv: number;
}
export interface ErrorMsg {
    type: 'error';
    st: string;
    file: string;
    msg: string;
}
export interface XMLType {
    type: 'interface';
    url: string;
    tc: number;
    cd: number;
    rq: string;
    rp: string;
}
export interface PvType {
    type: 'pv';
    pathname: string;
    from: string;
    title: string;
    stay: number;
}
export declare type ExtraMsg = XMLType | Performance | ErrorMsg | PvType | {
    type: string;
    [propKey: string]: any;
};
export declare type Msg = Merge<BaseMsg, ExtraMsg>;
export interface Options {
    projectKey: string;
    url: string;
    gatherKeys?: (keyof BaseMsg)[];
    frequency?: number;
    isDiscard?: boolean;
    isRoutes?: boolean;
    isPerformance?: boolean;
    isPromiseError?: boolean;
    isResourceError?: boolean;
    isRequest?: boolean;
    beforeInit?: () => void;
    mergeMsg?: () => Record<string, any> | Promise<Record<string, any>>;
    beforeSendMsg?: (data: ExtraMsg & BaseMsg) => ExtraMsg & BaseMsg;
    isLog?: boolean;
}
