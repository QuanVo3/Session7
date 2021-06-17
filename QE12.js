let item = ["Backpack", "MiBand watch", "Ring"];
console.log(...item);
let a = document.getElementById("list");
let list = a.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
    console.log(list[i].innerText);
}
for (let z = 0; z < item.length; z++) {
    list[z].insertAdjacentHTML("afterend", "<li>" + item[z] + "</li>");
}
let itemName = () => {item[item.length] = document.getElementById("textBox").value;
console.log(item[item.length - 1]);
}
list.render(item, document.getElementById('list'));

