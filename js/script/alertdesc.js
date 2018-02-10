// 有相关依赖
define(['script/desc'],function(desc){
    return function (){
        console.log(JSON.stringify(desc));
    };
})