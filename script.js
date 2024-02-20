
const btnIsValidNumbers = document.querySelector('#checkNumber');

function isValidNumbers() {
    let firstNumber = document.querySelector('#firstNumber');
    let secondNumber = document.querySelector('#secondNumber');

    firstNumber = 150//firstNumber.value
    secondNumber = 120//secondNumber.value
    // console.log(firstNumber, secondNumber);
    let isValid;

    const alert = document.querySelector('#alert');
    let message = '';

    if (firstNumber === 0  && secondNumber === 0) {
        message = 'Sorry, only one number can be 0.';
        isValid = false;
    } else if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {  
        message = 'Valid numbers, well done!';
        isValid = true;
        alert.textContent = message;

        return  {firstNumber, secondNumber};
    } else {
        message = 'Something is wrong, try another number.';
        isValid = false;
    }
    alert.textContent = message;
    return isValid;
    
    
}

btnIsValidNumbers.addEventListener('click', () => {
    let {firstNumber, secondNumber} = isValidNumbers();
    calculateSGD(firstNumber, secondNumber);

})

function calculateSGD(firstNumber, secondNumber) {
    let rest;
    console.log(firstNumber, secondNumber);
    do {
        rest = firstNumber % secondNumber;
        firstNumber = secondNumber;
        secondNumber = rest;
        console.log(rest, secondNumber);

    } while (rest != 0);

    console.log(firstNumber);

}
