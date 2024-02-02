console.log('Promgram Started');
const myPromise=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve({date:"Hello my friend",error:null})
    },5000)
})
console.log(myPromise)
console.log('Program in progres');
myPromise.then((res)=>{
    console.log(res);
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("First Promise chain is completed")
        },2000)
    });
}).then(res=>console.log(res))

myPromise.then((res)=>
{
    console.log(res);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            resolve('Second Promise chain completed');
        },10000)
    })
}).then(res=>console.log(res));