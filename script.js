let prevInput='0'
let calculationOperator=''
let currentInput='0'

// To input Numbers

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click",(event) => {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})
const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen=number => {
    calculatorScreen.value=number
}
const inputNumber = (number) => {
    if (currentInput === '0') {
        currentInput=number
    } else {
        currentInput += number
    }
}

// Operators

const operators=document.querySelectorAll(".operator")
operators.forEach((operator)=>{
    operator.addEventListener("click",(event) => {
        inputOperator(event.target.value)
    })
})
const inputOperator = (operator) => {
    prevInput=currentInput
    calculationOperator=operator
    currentInput='0'
}

// Displaying the result to screen

const equalSign=document.querySelector('.equal-sign')
equalSign.addEventListener("click",() => {
    calculate()
    updateScreen(currentInput)
})
const calculate=() => {
    let result=0
    switch(calculationOperator){
        case '+':
            result=parseFloat(prevInput)+parseFloat(currentInput)
            break
        case '-':
            result=parseFloat(prevInput)-parseFloat(currentInput)
            break
        case '*':
            result=parseFloat(prevInput)*parseFloat(currentInput)
            break
        case '/':
            result=parseFloat(prevInput)/parseFloat(currentInput)
            break
        default:
            return
    }
    currentInput=result.toString()
    calculationOperator=''
}

// AC button

const clear=document.querySelector('.all-clear')
clear.addEventListener("click",() => {
    clearscreen()
    updateScreen(currentInput)
})
const clearscreen=() => {
    currentInput='0'
    calculationOperator=''
}

// Finding percentage 

const percent=document.querySelector('.percentage')
percent.addEventListener("click",() => {
    findpercent()
    updateScreen(currentInput)
})
const findpercent=() => {
    let result = parseFloat(currentInput)/100
    currentInput=result.toString()
    calculationOperator=''
}

// Displaying decimal point

const dec=document.querySelector('.decimal')
dec.addEventListener("click",() => {
    finddecimal()
    updateScreen(currentInput)
})
const finddecimal=() => {
    currentInput += '.'
}