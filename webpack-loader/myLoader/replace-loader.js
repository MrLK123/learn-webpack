// 自定义loader
// 不能是箭头函数
// loader中的options在这里this.query中获取 
// this.callback(error:Error|null,content:string|Butter,sourceMap?:SourceMap,meta?:any)

// 处理异步 this.async()
module.exports = function (source) {
    console.log(this.query)
    const callback = this.async()
    console.log(333)
    setTimeout(() => {
        callback(null, source.replace('hellow', 'xx你的'))
    }, 3000)
    // return source.replace('hellow', '刘xxx   ');
}