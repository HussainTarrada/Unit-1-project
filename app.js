let fruits = ["Banana", "Apple", "Orange", "Blueberry", "Avocado", "Grapes", "Lemon", "Tomato", "Potato", "Dates", "Watermelon", "Coconut", "Mushrooms", "Strawberry", "Mango", "Cherry", "Pineapple"]

const myFruit = fruits[Math.floor(Math.random() * fruits.length)]

console.log(myFruit)

console.log(myFruit.length)

let mode = ""

const letterElement = document.querySelector("#Letters")

function myWord(){
    for(let i=0; i<myFruit.length; i++){
        const word = document.createElement("p");
        const space = document.createTextNode("_")
        word.appendChild(space)
    }
}

myWord()