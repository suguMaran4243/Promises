//async and await
function resolvedAfter2Seconds()
{
  return new Promise((resolve)=>
  {
    setTimeout(()=>
    {
      resolve('Resolved after 2 seconds')
    },2000)
  })
}
async function asynccall()
{
  console.log('First');
  const result=await resolvedAfter2Seconds();
  console.log(result);
  console.log('Second');
}
asynccall();