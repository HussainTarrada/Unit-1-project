let fruits = ["BANANA", "APPLE", "ORANGE", "BLUEBERRY", "AVOCADO", "GRAPES", "LEMON", "TOMATO", "POTATO", "DATES", "WATERMELON", "COCONUT", "MUSHROOMS", "STRAWBERRY", "MANGO", "CHERRY", "PINEAPPLE"]

let myModeChoice = ""

let sport = ["FOOTBALL", "BASKETBALL", "RUGBY", "CRICKET", "BASEBALL", "VOLLEYBALL", "TENNIS", "BOXING", "SWIMMING", "RUNNING", "GOLF", "HANDBALL"]

let actor = ["LEONARDO DICAPRIO", "ROBERT DOWNEY", "JOHNNY DEPP", "TOM HANKS", "DENZEL WASHINGTON", "TOM CRUISE", "BRAD PITT", "JOAQUIN PHOENIX", "GEORGE CLOONEY"]

let myArray = []

let isClicked = false

let correctLetter = false

let completeWord = false

let count = 0

let myMode = ""

let div = []

let divBar = ""

const letterElement = document.querySelector("#Letters")

const myStartButton = document.querySelector("#startButton")

const myAlphabets = document.querySelectorAll(".alphabet")

const gameMessage = document.querySelector("#gMessage")

const myImage = document.querySelector("#Image")

const myModeButton = document.querySelectorAll(".modeButton")

const theMode = document.querySelector("#mode")


myModeButton.forEach((mode)=>{
    mode.addEventListener("click",(element)=>{
        if(element.target.innerText === "Easy"){
            myArray = fruits
            theMode.innerText = "Hint: fruit"
            element.target.style.color = "brown"
            gameMessage.innerText = "start the game"
        }
        else if(element.target.innerText === "Medium"){
            myArray = sport
            theMode.innerText = "Hint: sport"
            element.target.style.color = "brown"
            gameMessage.innerText = "start the game"
        }
        else if(element.target.innerText === "Hard"){
            myArray = actor
            theMode.innerText = "Hint: actor"
            element.target.style.color = "brown"
            gameMessage.innerText = "start the game"
        }
        console.log(myArray)
    })
})

function myWord(){
    if(myModeChoice !== ""){
        return
    }
    myModeChoice = myArray[Math.floor(Math.random() * myArray.length)]

    console.log(myModeChoice)
    console.log(myModeChoice.length)
    // creating spaces for puttiing the letters in
    for(let i=0; i<myModeChoice.length; i++){
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


// function displayMessage(element){
// //   check if win or loose:
// for(let i=0; i < element.length; i++){
//     if(correctLetter === true && element[i] !== div[i].innerText){
//         gameMessage.innerText = "Correct! Keep Going"
//         gameMessage.style.color = "Green"
//     }
//     else if(correctLetter === false){
//         gameMessage.innerText = "Wrong! Try Another Letter"
//         gameMessage.style.color = "red"
//     }
//         else if(element[i] === div[i].innerText){
//             gameMessage.innerText = "Well done! You win"
//             gameMessage.style.color = "Green"
//         }
//         else if(count === 5){
//             gameMessage.innerText = "You Lost! Try Again"
//             gameMessage.style.color = "red"
//         }
        
//     }
// }

function displayMessage(){
    //   check if win or loose:
    console.log(completeWord)
    console.log("CORRECT LETTER", correctLetter)
        if(correctLetter === true){
            gameMessage.innerText = "Correct! Keep Going"
            gameMessage.style.color = "Green"
        }
        else if(count === 5){
            gameMessage.innerText = "You Lost! Try Again"
            gameMessage.style.color = "red"
        }
        else if(correctLetter === false){
            gameMessage.innerText = "Wrong! Try Another Letter"
            gameMessage.style.color = "red"
        }
            else if(completeWord === true){
                gameMessage.innerText = "Well done! You win"
                gameMessage.style.color = "Green"
            }
            
        
    }

function checkWordCompletion(element){
    for(let i=0; i<element.length; i++){
        if(div[i].innerText === element[i]){
            completeWord = true
        }
        else{
            completeWord = false
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
    const myArray = myModeChoice.split( "" )
    console.log(myArray)
    console.log(element.target.innerText)
    // checkWordCompletion(myArray)
    // replacing the spaces with the letter:
    for(let i=0; i<myArray.length; i++){
        // console.log(completeWord)
        console.log(myArray[i])
        if(element.target.innerText === myArray[i] && element.target.innerText !== div[i].innerText){
            div[i].innerText = element.target.innerText
            console.log(div)
            // gameMessage.innerText = "Correct! Keep Going"
            // gameMessage.style.color = "Green"

            for(let j = i; j < myArray.length; j++){
                if(element.target.innerText === myArray[j] && element.target.innerText !== div[j].innerText){
                    div[j].innerText = element.target.innerText
                }

            }

            console.log(div[i].innerText)
            correctLetter = true
            element.target.style.color = "brown"
            break
        }
       else if(element.target.innerText !== myArray[i]){
        correctLetter = false
        element.target.style.color = "brown"
       }
       else{
        element.target.style.color = "brown"
       }
    //    else if(myFruitArray[i] === div[i].innerText){
    //     completeWord = true
    //    }
    }

    checkWordCompletion(myArray)
        console.log(correctLetter)
        console.log(completeWord)
        console.log(div)
        changePicture(myArray)
        displayMessage(myArray)
      
})
})

