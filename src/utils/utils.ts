//深拷贝函数
export const clone = <T>(target:T):T=>{
    let result = null;
    if(typeof target !== 'object') return target;
    
    if(Array.isArray(target)){
        result = [];
        for(let item of target) result.push(clone(item));
    }else if(target === null){
        result = target;
    }else{
        result = {}
        for(let key in target) result[key] = clone(target[key])
    }
    return result;
}
