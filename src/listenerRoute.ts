import getBaseMsg from './libs/get-base-msg';
import sendData from "./libs/send-data";

const historyWrap = function(type) {
  const orig = history[type];
  const event = new Event(type);
  
  return function() {
    const rv = orig.apply(this, arguments);
    window.dispatchEvent(event);
    return rv;
  };
}

const listenerRoute = (): void => {
  
  let prev_pathname = '';
  let prev_time = Date.now();

  const _listener = () => {
    sendData({
      ...getBaseMsg(),
      pathname: window.location.href,
      from: prev_pathname,
      title: document.title,
      type: 'pv',
      stay: Date.now() - prev_time,
    });
  
    prev_pathname = window.location.href;
  };

  history.pushState = historyWrap('pushState');
  history.replaceState = historyWrap('replaceState');

  window.addEventListener('popstate', _listener)
  window.addEventListener('pushState', _listener)
};

export default listenerRoute;