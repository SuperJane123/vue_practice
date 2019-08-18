// Promise是一个构造函数，里面的有一个参数是函数，函数里两个回调函数
const fs = require('fs')
// fs.readFile('../../data/1.text','utf-8',(err,data)=>{
//     if(err) {
//         console.log(err);
//     }else
//     console.log(data)
// })
function createPromise(filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(`../../data/${filename}`,'utf-8',(err,data)=>{
            if(err) {
                reject(err)
            }else
            resolve(data)
        })
    })
}
let p1 = createPromise('1.text')

let p2 = createPromise('2.text')

let p3 = createPromise('3.text')

p1
.then(res=>{
    console.log(res)
    return p2
})
.then(res=>{
    console.log(res);
    return p3
})
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})
