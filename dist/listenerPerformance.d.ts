export interface Perfaormance {
    dns: number;
    tcp: number;
    ttfb: number;
    bt: number;
    dt: number;
    drt: number;
    rt: number;
    lt: number;
}
export default function listenerPerformance(): void;
