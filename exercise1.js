console.log('Program Started');
const myPromise=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('Step1 completed.. ')
    },3000)
})

console.log(myPromise);
console.log('program is in progress')
myPromise.then((res)=>
{
    console.log(res)
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve('Step2 Complete')
        },6000);
    })
}).then(
    (res2)=>
    {
        console.log(res2);
        return new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
                resolve('Step 3 is completed')
            },9000)
        })
    }).then(res3=>console.log(res3)
    )
    
