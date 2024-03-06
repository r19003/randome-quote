import { sendDataToCodeJs } from './code.js';

let num1;

document.querySelectorAll('.button').forEach((button, index) => {
    button.addEventListener('click', () => {
        num1 = index + 1;
        console.log(num1);
        
        // Call the function in code.js with num1 as an argument
        sendDataToCodeJs(num1);
    });
});