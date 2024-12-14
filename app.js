let fruits = ["BANANA", "APPLE", "ORANGE", "BLUEBERRY", "AVOCADO", "GRAPES", "LEMON", "TOMATO", "POTATO", "DATES", "WATERMELON", "COCONUT", "MUSHROOMS", "STRAWBERRY", "MANGO", "CHERRY", "PINEAPPLE"]

let myFruit = ""

let isClicked = false

let correctLetter = false

let completeWord = false

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


function displayMessage(element){
//   check if win or loose:
for(let i=0; i<element.length; i++){
        if(element[i] === div[i].innerText){
            gameMessage.innerText = "Well done! You win"
            gameMessage.style.color = "Green"
        }
        else if(correctLetter === true && completeWord === false){
            gameMessage.innerText = "Correct! Keep Going"
            gameMessage.style.color = "Green"
        }
        else if(completeWord === true && element[i] !== div[i].innerText){
            gameMessage.innerText = "You Lost! Try Again"
            gameMessage.style.color = "red"
        }
        else if(completeWord === false && correctLetter === false){
            gameMessage.innerText = "Wrong! Try Another Letter"
            gameMessage.style.color = "red"
        }
    }
}

function checkWordCompletion(element){
    for(let i=0; i<element.length; i++){
        if(div[i].innerText !== " ___ "){
            completeWord = false
        }
        else{
            completeWord = true
        }
    }
}

console.log(gameMessage)

myStartButton.addEventListener("click", myWord)

myAlphabets.forEach((letter)=>{
    letter.addEventListener("click", (element) =>{
    const myFruitArray = myFruit.split( "" )
    console.log(myFruitArray)
    console.log(element.target.innerText)
    // replacing the spaces with the letter:
    for(let i=0; i<myFruitArray.length; i++){
        // console.log(completeWord)
        console.log(myFruitArray[i])
        if(element.target.innerText === myFruitArray[i] && myFruitArray[i] !== div[i].innerText){
            div[i].innerText = element.target.innerText
            console.log(div)
            // gameMessage.innerText = "Correct! Keep Going"
            // gameMessage.style.color = "Green"
            console.log(div[i].innerText)
            correctLetter = true
            completeWord = false
        }
       else if(element.target.innerText !== myFruitArray[i] && myFruitArray[i] === div[i].innerText){
        completeWord = true
        correctLetter = false
       }
    }
        checkWordCompletion(myFruitArray)
        console.log(correctLetter)
        console.log(completeWord)
        console.log(div)
        displayMessage(myFruitArray)
})
})