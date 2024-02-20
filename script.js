
const btnCheckNumbers = document.querySelector('#checkNumber');

function checkNumbers() {
    let firstNumber = document.querySelector('#firstNumber');
    let secondNumber = document.querySelector('#secondNumber');

    firstNumber = .9;//firstNumber.value
    secondNumber = 5;//secondNumber.value

    console.log(firstNumber, secondNumber);

    if (firstNumber >= 0 && Number.isInteger(firstNumber)) {
         console.log('numeros validos');   
        
    } else {
        const alert = document.querySelector('#alert');
        alert.textContent = 'Invalid Number, try again!'

    }
    
    // if (Number.isInteger(firstNumber) === true && firstNumber !== 0 &&
    //  Number.isInteger(secondNumber) === true && secondNumber !== 0 ) {
        
    // } else {
    //     return console.log('Try another number')
    // }

}

btnCheckNumbers.addEventListener('click', () => {

    checkNumbers();
})

