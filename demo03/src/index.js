import '@babel/polyfill'
const arr = [new Promise(() => {}), new Promise(() => {})]
arr.map(item => item.then(() => {
    console.log(ok)
}))