class calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendnumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()    }

    chooseOperation(operation){
       if (this.currentOperand === '' ) return
       if (this.previousOperand !== '') {
           this.computer()
       }

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand= ''
    }

    computer(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev)|| isNaN(current)) return
        switch (this.operation){
            case '+':
                computation= prev + current
                break
                case '-':
                    computation= prev - current
                    break
                    case '*':
                        computation= prev * current
                        break
                        case '/':
                            computation= prev / current
                            break
                            default:
                                return
                                      
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelector('[data-equals')
const deleteButton = document.querySelector('[data-delete')
const allClearButton = document.querySelector('[data-all-clear')
const previousOperandTextElement = document.querySelector('[data-previous-operand')
const currentOperandTextElement  = document.querySelector('[data-current-operand')

const calculator = new calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(Button => {
    Button.addEventListener('click',() => {
        calculator.appendnumber(Button,innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(Button => {
    Button.addEventListener('click',() => {
        calculator.chooseOperation(Button,innerText)
        calculator.updateDisplay()
    })
})


equalsButton.addEventListener('click', button =>{

    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button =>{

    calculator.clear()
    calculator.updateDisplay()
})


deleteButton.addEventListener('click', button =>{

    calculator.delete()
    calculator.updateDisplay()
})