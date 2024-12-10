let fruits = ["BANANA", "APPLE", "ORANGE", "BLUEBERRY", "AVOCADO", "GRAPES", "LEMON", "TOMATO", "POTATO", "DATES", "WATERMELON", "COCONUT", "MUSHROOMS", "STRAWBERRY", "MANGO", "CHERRY", "PINEAPPLE"]

let myFruit = ""

let isClicked = false

let mode = ""

const letterElement = document.querySelector("#Letters")

const myStartButton = document.querySelector("#startButton")

const myAlphabets = document.querySelectorAll(".alphabet")

let div

function myWord(){
    if(myFruit !== ""){
        return
    }
    myFruit = fruits[Math.floor(Math.random() * fruits.length)]

    console.log(myFruit)
    console.log(myFruit.length)
    for(let i=0; i<myFruit.length; i++){
        div = document.createElement("div")
        div.innerText = " ___ "
        letterElement.appendChild(div)
    }
    console.log(div)
//    wordSplitter()
}

// function wordSplitter(event){
//     const myFruitArray = myFruit.split( "" )
//     console.log(myFruitArray)
//     console.log(myAlphabets)
//     for(let i=0; i<myFruitArray.length; i++){
//     }

// }


myStartButton.addEventListener("click", myWord)

myAlphabets.forEach((letter)=>{
    letter.addEventListener("click", (element) =>{
    const myFruitArray = myFruit.split( "" )
    console.log(myFruitArray)
    console.log(element.target.innerText)
    for(let i=0; i<myFruitArray.length; i++){
        console.log(myFruitArray[i])
        if(myFruitArray[i] == element.target.innerText){
            div.innerText = element.target.innerText
            console.log(div)
        }
    }
})
})