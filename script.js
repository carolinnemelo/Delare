
const btnIsValidNumbers = document.querySelector('#checkNumber');
let num1 = document.querySelector('#firstNumber');
let num2 = document.querySelector('#secondNumber');
let lines = 0;

async function isValidNumbers() {
    let firstNumber = num1.value;
    let secondNumber = num2.value;
    let message = '';
    const alert = document.querySelector('#alert');

        
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        message = 'Only numbers, please.';

    } else if(firstNumber.length === 0 || secondNumber.length === 0 || firstNumber === null || secondNumber === null){
        message = 'Fill both forms, please.';
    } else {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);


        if (firstNumber === 0  && secondNumber === 0) {
            message = 'Sorry, only one number can be 0.';
            
        } else if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {  
            // message = 'Valid numbers, well done!';
            // alert.textContent = message;
            const sgd = await calculateSGD(firstNumber, secondNumber);
            displaySGD(firstNumber, secondNumber, sgd);
        } else {
            message = 'Something is wrong, try another number.';
        }
    }


    alert.textContent = message;
    
    
}

btnIsValidNumbers.addEventListener('click', () => {
    isValidNumbers();

 
})

function calculateSGD(firstNumber, secondNumber) {
    let rest;
    do {
        rest = firstNumber % secondNumber;
        firstNumber = secondNumber;
        secondNumber = rest;


    } while (rest != 0);
    
    const sgd = firstNumber;
    return sgd

  

}

function displaySGD(firstNumber, secondNumber, sgd) {
    const main = document.querySelector('#results')
    const p = document.querySelector('.result');
    const newP = p.cloneNode(true);
    console.log(newP);
    newP.classList.remove('d-none');
    newP.textContent = `Största gemensamma delare mellan ${firstNumber} och ${secondNumber} är ${sgd}.`;
    main.appendChild(newP);
    lines ++;
    if(lines > 5) {
        main.removeChild(main.children[1]);
    }


}
