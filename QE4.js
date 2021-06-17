let x = document.getElementById("QE4");
let y = x.getElementsByTagName("li");
console.log(y[1].innerHTML);
for(let i = 0;i < 3;i++)
{
    if(i != 1)
    {
        console.log(y[i]).innerHTML;
    }
}

