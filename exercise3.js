const promise1=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(10)
    },5000)
})
const promise2=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(20)
    },3000)
})
Promise.all([promise1,promise2]).then((values)=>
{
    console.log(values);
    const val1=values[0];
    const val2=values[1];
    const sum=val1+val2;
    console.log(sum);
});
