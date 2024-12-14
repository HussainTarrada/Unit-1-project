let fruits = ["BANANA", "APPLE", "ORANGE", "BLUEBERRY", "AVOCADO", "GRAPES", "LEMON", "TOMATO", "POTATO", "DATES", "WATERMELON", "COCONUT", "MUSHROOMS", "STRAWBERRY", "MANGO", "CHERRY", "PINEAPPLE"]

let myFruit = ""

let isClicked = false

let mode = ""

const letterElement = document.querySelector("#Letters")

const myStartButton = document.querySelector("#startButton")

const myAlphabets = document.querySelectorAll(".alphabet")

const gameMessage = document.querySelector("#gMessage")

let div = []

function myWord(){
    if(myFruit !== ""){
        return
    }
    myFruit = fruits[Math.floor(Math.random() * fruits.length)]

    console.log(myFruit)
    console.log(myFruit.length)
    // creating spaces for puttiing the letters in
    for(let i=0; i<myFruit.length; i++){
        div[i] = document.createElement("div")
        div[i].innerText = " ___ "
        letterElement.appendChild(div[i])
    }
    console.log(div)
    gameMessage.innerText = "Choose a letter"
//    wordSplitter()
}

// function wordSplitter(event){
//     const myFruitArray = myFruit.split( "" )
//     console.log(myFruitArray)
//     console.log(myAlphabets)
//     for(let i=0; i<myFruitArray.length; i++){
//     }

// }

console.log(gameMessage)

myStartButton.addEventListener("click", myWord)

myAlphabets.forEach((letter)=>{
    letter.addEventListener("click", (element) =>{
    const myFruitArray = myFruit.split( "" )
    console.log(myFruitArray)
    console.log(element.target.innerText)
    // replacing the spaces with the letter:
    for(let i=0; i<myFruitArray.length; i++){
        console.log(myFruitArray[i])
        if(element.target.innerText == myFruitArray[i]){
            div[i].innerText = element.target.innerText
            console.log(div)
            gameMessage.innerText = "Corret! Keep going"
            gameMessage.style.color = "green"
        }
        else if(element.target.innerText !== myFruitArray[i] && div[i] === " ___ "){
            gameMessage.innerText = "Wrong! Try Again"
            gameMessage.style.color = "red"
        }
        else{
            return
        }
        // check if win or loose:
        if(div[i] !== " ___ " && element.target.innerText == myFruitArray[i]){
            gameMessage.innerText = "Well done! You win"
            gameMessage.style.color = "Green"
        }
        else if(div[i] == " ___ " && element.target.innerText !== myFruitArray[i]){
            
        }
    }
})
})