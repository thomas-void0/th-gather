# th-gather ![NPM](https://img.shields.io/npm/v/th-gather) ![License](https://img.shields.io/npm/l/th-gather)

`th-gather`是简单易用且可扩展的前端全埋点脚本。可以统计上报接口请求，页面停留时间，用户设备等信息。为业务需求迭代提供数据参考。

# 一、安装和使用

## 安装

```npm
npm i th-gather -D
```

或者

```yarn
yarn add th-gather -D
```

## 使用

```ts
import init from 'th-gather';

init({
  projectKey: 'pc_project',
  url: '/log/record',
  callback(dispatchData) {
    dispatchData({ type: 'newType', user: 'thomas' }); // 执行发送自定义数据
  },
});
```

# 二、初始化选项

|      参数       |   类型    |                                           描述                                            |                            默认值                            |
| :-------------: | :-------: | :---------------------------------------------------------------------------------------: | :----------------------------------------------------------: |
|   projectKey    |  string   |                            自定义的项目标识，方便区分多个项目                             |                              -                               |
|       url       |  string   |                                        上报的地址                                         |                              -                               |
|   gatherKeys    | BaseMsg[] |                                  配置需要收集的基本信息                                   | ['key','o','ua','ul','ct','vp','sr','uuid','gmt','dpr','rf'] |
|    callback     | Function  | 回调函数，参数为 dispatchData。该函数会在初始化阶段执行。可以自定义收集想要的参数进行上报 |                              -                               |
|    frequency    |  number   |                             上报频率,默认为每满 10 条上报一次                             |                              10                              |
|    isDiscard    |  boolean  |                             是否在窗口关闭时，上报剩余的数据                              |                             true                             |
|    isRoutes     |  boolean  |                                   是否收集路由跳转信息                                    |                             true                             |
|  isPerformance  |  boolean  |                                  是否监听浏览器性能信息                                   |                             true                             |
| isPromiseError  |  boolean  |                是否监听 promise 错误（没有被 reject 处理的 promise 错误）                 |                             true                             |
| isResourceError |  boolean  |                                   是否监听页面资源错误                                    |                             true                             |
|    isRequest    |  boolean  |                                   是否监听接口请求信息                                    |                             true                             |

# 三、上报数据格式

上报的数据由`基本数据 + 对应类型数据`组成(**使用 gatherKeys 编辑的时候，只能编辑基本数据字段**)，如下所示：

![fef1f9ed0790da2a311cee17b508673](https://user-images.githubusercontent.com/48620706/153793614-9baeb0bd-bac3-493a-af49-9d940ed0e896.png)

# 四、收集字段含义

## 4.1 基本数据

| 字段 |                                                描述                                                |
| :--: | :------------------------------------------------------------------------------------------------: |
| key  |                                            项目 key 值                                             |
|  o   |                                            当前页面路径                                            |
|  ua  |                                                 ua                                                 |
|  ul  |                                             浏览器语言                                             |
|  ct  |                                              网络类型                                              |
|  vp  |                                             浏览器宽高                                             |
|  sr  |                                              屏幕宽高                                              |
| uuid | 表示用户的唯一值，第一次随机生成一个 uuid。然后存储在用户的 localStorage 里面,以后每次都使用这个值 |
| gmt  |                                            数据生成时间                                            |
| dpr  |                                          devicePixelRatio                                          |
|  rf  |                                              referer                                               |

## 4.2 浏览器性能数据

| 字段 |           描述           |
| :--: | :----------------------: |
| type |    标识为 performance    |
| dns  |       dns 查询时间       |
| tcp  |       tcp 连接耗时       |
| ttfb | 读取页面第一个字节的时间 |
|  bt  |         白屏时间         |
|  dt  |     解析 dom 树耗时      |
| drt  |       dom 完成时间       |
|  rt  |     request 请求耗时     |
|  lt  |       页面完成时间       |
|  nv  |  当前页面如何导航到此处  |

## 4.3 路由信息

|   字段   |      描述      |
| :------: | :------------: |
|   type   |   标识为 pv    |
| pathname |  当前路由地址  |
|   from   | 上一个跳转地址 |
|  title   |    网页标题    |
|   stay   |    停留时间    |

## 4.4 接口信息

| 字段 |       描述       |
| :--: | :--------------: |
| type | 标识为 interface |
| url  |   接口请求地址   |
|  tc  |     接口耗时     |
|  cd  |      状态码      |
|  rq  |   发送请求时间   |
|  rp  |   接受响应时间   |

## 4.5 js 错误信息

| 字段 |     描述     |
| :--: | :----------: |
| type | 标识为 error |
|  st  | 错误类型 js  |
| file |    文件名    |
| line | error.lineno |
| col  |  error.coln  |
| msg  |   错误信息   |

## 4.6 资源异常信息

| 字段 |       描述        |
| :--: | :---------------: |
| type |   标识为 error    |
|  st  | 错误类型 resource |
| file |     资源链接      |
| msg  |     错误信息      |

## 4.7 promise 错误信息

| 字段 |       描述       |
| :--: | :--------------: |
| type |   标识为 error   |
|  st  | 错误类型 promise |
| file |       ' '        |
| msg  |     错误信息     |
