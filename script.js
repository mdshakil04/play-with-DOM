console.log("I am from dom")
const title = document.getElementById("title")
title.innerText = "Shakil is my Boss";
title.style.color = "blue"
console.log(title.innerText)
const liContainer = document.getElementsByClassName("li-items");
const liItems = document.getElementsByClassName("li-items")
// console.log(liItems)
for(const li of liItems){
    // console.log(li)
    li.innerText = "Boss"
}
const pTag = document.getElementsByTagName('p')
for (const p of pTag){
    // console.log(p.innerText)
    p.innerText = "How are you ?"
}
