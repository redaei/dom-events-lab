/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const screen = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/
let num1 = null
let num2 = null
let operation = null
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

const displayOnScreen = (theText) => {
  screen.innerText = theText
}

// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     console.log(event.target.innerText)
//     // Future logic to capture the button's value would go here...
//   })
// })

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText)

  // Example
  if (event.target.classList.contains('number')) {
    // Do something with a number

    if (operation) {
      if (num2) {
        num2 = num2 + event.target.innerText
        displayOnScreen(num2)
      } else {
        num2 = event.target.innerText
        displayOnScreen(num2)
      }
    } else {
      if (num1) {
        num1 = num1 + event.target.innerText
        displayOnScreen(num1)
      } else {
        num1 = event.target.innerText
        displayOnScreen(num1)
      }
    }
  }

  //operators
  if (event.target.classList.contains('operator')) {
    if (operation === 'C') {
      num1 = 0
      num2 = null
      operation = null
      displayOnScreen(num1)
    } else {
      operation = event.target.innerText
    }

    //put result in num1
    // clear num2
    //clear operation
  }

  //equal
  if (event.target.classList.contains('equals')) {
    if (operation === '+') {
      num1 = parseFloat(num1) + parseFloat(num2)
    } else if (operation === '-') {
      num1 = parseFloat(num1) - parseFloat(num2)
    } else if (operation === '*') {
      num1 = parseFloat(num1) * parseFloat(num2)
    } else if (operation === '/') {
      if (num2) {
        num1 = parseFloat(num1) / parseFloat(num2)
      } else {
        num1 = 'cant div on 0'
      }
    }
    displayOnScreen(num1)
    num2 = null
    operation = null

    // num1 = event.target.innerText

    //put result in num1
    // clear num2
    //clear operation
  }
})

/*-------------------------------- Functions --------------------------------*/
