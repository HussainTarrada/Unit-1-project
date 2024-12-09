let fruits = ["Banana", "Apple", "Orange", "Blueberry", "Avocado", "Grapes", "Lemon", "Tomato", "Potato", "Dates", "Watermelon", "Coconut", "Mushrooms", "Strawberry", "Mango", "Cherry", "Pineapple"]



let mode = ""

const letterElement = document.querySelector("#Letters")

const myStartButton = document.querySelector("#startButton")


function myWord(){
    const myFruit = fruits[Math.floor(Math.random() * fruits.length)]
    console.log(myFruit)
    console.log(myFruit.length)
    for(let i=0; i<myFruit.length; i++){
        var div = document.createElement("div")
        div.setAttribute('class', 'spaces')
    }
}


myStartButton.addEventListener("click", myWord)