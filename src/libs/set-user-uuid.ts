//设置用户在浏览器中的uuid
const setUserUUid = (_response):void=>{
    const { config,response } = _response;
    const url = config ? config.url : '';
    try {
        const res = response ? JSON.parse(response) : {value:{user:{}}}
        if(url.includes("/xdnphb/common/account/get")){
            window.localStorage.setItem("$$_TH_GATHER",res.value.user.uuid)
        }
    } catch (error) {}
}

export default setUserUUid;