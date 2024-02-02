console.log('Program is started');
const promise1=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('Program is completed')
    },3000)
});
console.log(promise1);
console.log('Program is progress');
promise1.then(res=>console.log(res));

