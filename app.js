/*-------------------------------- Constants --------------------------------*/
//const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const screen = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/
let num1 = null
let num2 = null
let operation = null
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
  // Example
  if (event.target.classList.contains('number')) {
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
    operation = event.target.innerText
    event.target.style.border = '2px solid rgb(255, 154, 60)'
    if (operation === 'C') {
      displayOnScreen('0')
      num1 = 0
      num2 = null
      operation = null
      unselectOperators()
    }
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
    unselectOperators()
  }
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText)
})

/*-------------------------------- Functions --------------------------------*/
const displayOnScreen = (theText) => {
  screen.innerText = theText
}
const unselectOperators = () => {
  document.querySelectorAll('.operator').forEach((op) => {
    op.removeAttribute('style')
    console.log(op)
  })
}
