function helloWorld()
{
  console.log("Hello World!")
}
let a = setInterval(() => helloWorld(), 1000);
setTimeout(() => clearInterval(a), 5000);



