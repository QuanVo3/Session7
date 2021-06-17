let Name2, Wish2;
let l = () => {
    do {
        Name2 = prompt("Your Name?");
        Wish2 = prompt("Your Wish?");
        if (Name2 == " " || Wish2 == " ") {
            console.log("What is your name and wish?")
        }
        else{
            alert(Name2 + " your wish is " + Wish2);
        }
    } while (Name2 == " " || Wish2 == " ");
}
l();
