/**
 * 处理spa hash模式
 */
import setPage from './libs/pv-data';

const _historyWrap = function(type) {
  const orig = history[type];
  const _event = new Event(type);
  
  return function() {
    const rv = orig.apply(this, arguments);
    window.dispatchEvent(_event);
    return rv;
  };
}

const hashMode = (): void => {
  setPage();
  const listener = () => setPage();

  //这个方法只有可以不用要，不管是hash路由还是history路由，
  //页面正常切换会触发（vue、react一样）：pushState

  // window.addEventListener('hashchange', ()=>{
  //   console.log('hashchange')
  //   listener()
  // }, false);
  
  history.pushState = _historyWrap('pushState');
  history.replaceState = _historyWrap('replaceState');
  
  /**
   * 页面回退
   * 
   * vue: {
   *  初始化：不会触发
   *  正常切换：不会触发
   *  页面回退: 会触发
   * }
   * react: {
   *  初始化：不会触发
   *  正常切换：不会触发
   *  页面回退: 会触发
   * }
   */
  window.addEventListener('popstate', listener)
  
  /**
   * 页面路由正常切换
   * 
   * vue: {
   *  初始化：不会触发
   *  正常切换：会触发
   *  页面回退: 不会触发
   * }
   * react: {
   *  初始化：不会触发
   *  正常切换：会触发
   *  页面回退: 不会触发
   * }
   */
  window.addEventListener('pushState', listener)
  
  /**
   * 页面重定向
   * 
   * vue: {
   *  初始化：会触发
   *  正常切换：不会触发
   *  页面回退: 不会触发
   * }
   * react: {
   *  初始化：不会触发
   *  正常切换：特定场景会触发（一级或二级路由变化）
   *  页面回退: 不会触发
   * }
   */
  // window.addEventListener('replaceState',()=>{
  //   console.log('replaceState')
  //   listener()
  // })
  
};

export default hashMode;
