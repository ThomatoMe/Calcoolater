const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys')
const display = calculator.querySelector('.calculator_display');


keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return 
    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const { type } = key.dataset
    const { previousKeyType } = calculator.dataset


 // Is this a number key?
 // if (key.classList.contains('number')) to byla první verze
    if (type === 'number') { 
        if (displayValue === '0') {
            display.textContent = keyValue
        }
        else if (previousKeyType === "operator") {
                display.textContent = keyValue
        }
        else
        {
            display.textContent = displayValue + keyValue
        }
    }

  // Is this a operator key?
    if (type === 'operator') {
       /* const operatorKeys = keys.querySelectorAll('[data-type = "operator"]')
        operatorKeys.forEach(el => { el.dataset.state = '' })
        key.dataset.state = 'selected'*/
        console.log(key)
    }

    if (type === 'equal') {
        //perform a calculation
    
         calculator.dataset.previousKeyType = type
        } 
    })