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
export interface Performance extends BaseMsg {
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
export interface ErrorMsg extends BaseMsg {
    type: 'error';
    st: string;
    file: string;
    msg: string;
}
export interface StaticMsg extends BaseMsg {
    type: 'static';
    name: string;
    initiatorType: string;
    duration: number;
    nextHopProtocol: string;
    decodedBodySize: number;
}
export interface XMLType extends BaseMsg {
    type: "interface";
    url: string;
    tc: number;
    cd: number;
    rq: string;
    rp: string;
}
export interface PvType extends BaseMsg {
    type: "pv";
    pathname: string;
    from: string;
    title: string;
    stay: number;
}
export declare type Msg = StaticMsg | XMLType | Performance | ErrorMsg | PvType;
export interface Options {
    projectKey: string;
    url: string;
    gatherKeys: Msg[];
    callback?: (dispatchData: (arg: any) => void) => void;
    frequency?: number;
    isDiscard?: boolean;
    isRoutes?: boolean;
    isPerformance?: boolean;
    isPromiseError?: boolean;
    isResourceError?: boolean;
    isRequest?: boolean;
}
