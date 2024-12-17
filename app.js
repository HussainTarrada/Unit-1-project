let fruits = ["BANANA", "APPLE", "ORANGE", "BLUEBERRY", "AVOCADO", "GRAPES", "LEMON", "TOMATO", "POTATO", "DATES", "WATERMELON", "COCONUT", "MUSHROOMS", "STRAWBERRY", "MANGO", "CHERRY", "PINEAPPLE"]

let myFruit = ""

let isClicked = false

let correctLetter = false

let completeWord = false

let count = 0

let mode = ""

const letterElement = document.querySelector("#Letters")

const myStartButton = document.querySelector("#startButton")

const myAlphabets = document.querySelectorAll(".alphabet")

const gameMessage = document.querySelector("#gMessage")

const myImage = document.querySelector("#Image")

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
        if(element[i] === div[i].innerText && div[i] === " ___ "){
            gameMessage.innerText = "Well done! You win"
            gameMessage.style.color = "Green"
        }
        else if(correctLetter === true){
            gameMessage.innerText = "Correct! Keep Going"
            gameMessage.style.color = "Green"
        }
        else if(element[i] !== div[i].innerText && completeWord === true && count === 5){
            gameMessage.innerText = "You Lost! Try Again"
            gameMessage.style.color = "red"
        }
        else if(correctLetter === false && completeWord === false){
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

function changePicture(element){
    console.log(count)
    if(correctLetter === false && count === 0){
        count = count + 1
        myImage.src="first mistake.jpg"
    }
    else if(correctLetter === false && count === 1){
        count = count + 1
        myImage.src="second mistake.jpg"
    }
    else if(correctLetter === false && count === 2){
        count = count + 1
        myImage.src="third mistake.jpg"
    }
    else if(correctLetter === false && count === 3){
        count = count + 1
        myImage.src="fourth mistake.jpg"
    }
    else if(correctLetter === false && count === 4){
        count = count + 1
        myImage.src="fifth mistake.jpg"
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
        }
       else if(element.target.innerText !== myFruitArray[i] && myFruitArray[i] === div[i].innerText){
        correctLetter = false
       }
       else if(myFruitArray[i] === div[i].innerText){
        completeWord = true
       }
    }


        checkWordCompletion(myFruitArray)
        console.log(correctLetter)
        console.log(completeWord)
        console.log(div)
        changePicture(myFruitArray)
        displayMessage(myFruitArray)
      
})
})