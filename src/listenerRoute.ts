import dispatchData from './libs/dispatchData';
import { PvType } from './typings';

const historyWrap = function (type) {
  const orig = history[type];
  const event = new Event(type);

  // eslint-disable-next-line func-names
  return function () {
    // eslint-disable-next-line prefer-rest-params
    const rv = orig.apply(this, arguments);
    window.dispatchEvent(event);
    return rv;
  };
};

const listenerRoute = (): void => {
  let prev_pathname = '';
  let prev_time = Date.now();

  const _listener = () => {
    const msg: PvType = {
      pathname: window.location.href,
      from: prev_pathname,
      title: document.title,
      type: 'pv',
      stay: Date.now() - prev_time,
    };
    dispatchData(msg);
    prev_pathname = window.location.href;
  };

  history.pushState = historyWrap('pushState');
  history.replaceState = historyWrap('replaceState');

  window.addEventListener('popstate', _listener);
  window.addEventListener('pushState', _listener);
};

export default listenerRoute;
