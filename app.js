let fruits = ["Banana", "Apple", "Orange", "Blueberry", "Avocado", "Grapes", "Lemon", "Tomato", "Potato", "Dates", "Watermelon", "Coconut", "Mushrooms", "Strawberry", "Mango", "Cherry", "Pineapple"]

let myFruit = ""

let mode = ""

const letterElement = document.querySelector("#Letters")

const myStartButton = document.querySelector("#startButton")

const myAlphabets = document.querySelectorAll(".alphabet")


function myWord(){
    if(myFruit !== ""){
        return
    }
    myFruit = fruits[Math.floor(Math.random() * fruits.length)]

    console.log(myFruit)
    console.log(myFruit.length)
    for(let i=0; i<myFruit.length; i++){
        let div = document.createElement("div")
        div.innerText = " ___ "
        letterElement.appendChild(div)
    }
   wordSplitter()
}

function wordSplitter(){
    const myFruitArray = myFruit.split( "" )
    console.log(myFruitArray)
    

}


myStartButton.addEventListener("click", myWord)

myAlphabets.forEach((letter)=>{
    letter.addEventListener("click", 
        console.log(letter)
    )
})