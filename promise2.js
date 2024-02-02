//Create a promise that is resolved after 3 seconds and rejects after 2 seconds...
console.log('Program Started');
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
          resolve('Program is completed successfully')
    },2000)
    setTimeout(()=>
    {
        reject('Program is failed')
    },2000)
    

})
console.log(promise2);
console.log('Program is in progress');

promise2.then(success=>console.log(success))
.catch(fail=>console.log(fail))