let Name;
let Input = () => {
    Name = document.getElementById('textBox').value;
    console.log(Name + " Upper it!!!Just clicked!");
}
let Upper = () => {
    let toUpper = Name.toUpperCase();
    console.log("User's name: " + Name);
    console.log("User name upper case: " + toUpper);
    document.getElementById("result-div").innerHTML = toUpper;
}

