
function greeting()
{
    console.log("Hi")
}
greeting();
console.log('After the function call it executes..')

//promises
const p1=new Promise((resolve,reject)=>
{
    let x=0;
    if(x==0)
    {
        resolve('Resolved')
    }
    else
    {
        reject('Rejected')
    }
})
console.log(p1.then())
p1.then((val)=>{
    console.log(val)
})
// p1.catch((err)=>
// {
//     console.log(err)
// })
//-----------------------------------------
//promise.all()
const promise1=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('Sucees1')
    },300);
})
const promise2=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('Success2');
    },500);
})
Promise.all([promise1,promise2]).then((x)=>
{
  console.log(x)
});
const p0 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p0, p2, p3]).then((values) => {
  console.log(values); 
});

//promise.allSettled()
const promise=Promise.resolve(3);
const promise4=new Promise((resolve,reject)=>
{
  setTimeout(()=>
  {
    reject('Rejected')
  },300)
})
Promise.allSettled([promise,promise4]).then((res)=>
{
res.forEach((result)=>
console.log(result.status))
});
//Promise.any
const promiseAny1=Promise.reject(0);
const promiseAny2=new Promise((resolve,reject)=>
{
setTimeout(()=>
{
   reject('First fulfilled')
},200)
})
const promiseAny3=new Promise((resolve,reject)=>
{
  setTimeout(()=>
  {
    resolve('Second Fulfillled')
  },300)
});
const promises=[promiseAny1,promiseAny2,promiseAny3]
Promise.any(promises).then((result)=>console.log(result));

//Promise.catch()
const err1=new Promise((resolve,reject)=>
{
  a=0
  if(a==1)
  resolve('a is crt')
  else
  reject('a is wrong')
  
}
)
err1.catch((err)=> console.log(err));

//promise.finally

function checkMail()
{
  return new Promise((resolve,reject)=>
  {
    message='sent Mail'
    if(message=='sent Mail')
    {
      resolve('Mail sent to the admin successfully')
    }
    else
    {
      reject(new Error('Failed to send!'))
    }
  })
}
checkMail().then((mess)=>console.log(mess)).catch((err)=>console.log(err)).finally(()=>console.log('The process is done'));

//promise.race()
const promiseRace1=new Promise((resolve,reject)=>
{
  setTimeout(()=>
  {
    resolve('It resolved after 5 seconds')
  },5000
  )
})
const promiseRace2=new Promise((resolve,reject)=>
{
  setTimeout(()=>
  {
    reject('It reject after 10 seconds')
  },1000
  )
})
Promise.race([promiseRace1,promiseRace2]).then((fast)=>console.log(fast)).catch((err)=>console.log(err))

//Promise.reject
function resolved(res)
{
  console.log('Resolved')
}
function rejected(rej)
{
  console.log('Rejected')
}
Promise.reject(new Error('fail')).then(resolved,rejected);

//Promise.resolve

const resolve1=Promise.resolve(10);
resolve1.then((x)=>console.log(x))

//promise.withResolvers()
let resolve, reject;
const promiseRes = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

function printName()
{
  console.log("Hi hello Welcome")
  
}
let process=setInterval(printName,10000)
clearInterval(process)



