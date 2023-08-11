let display = document.getElementById('display');
let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    display.value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += operator;
    display.value = currentExpression;
}

function calculate() {
    try {
        let result = eval(currentExpression);
        display.value = result;
        currentExpression = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
    currentExpression = '';
}

function toggleSign() {
    if (currentExpression.charAt(0) === '-') {
        currentExpression = currentExpression.substr(1);
    } else {
        currentExpression = '-' + currentExpression;
    }
    display.value = currentExpression;
}

function calculateSquare() {
    try {
        let result = eval(currentExpression);
        result = result * result;
        display.value = result;
        currentExpression = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateReciprocal() {
    try {
        let result = eval(currentExpression);
        result = 1 / result;
        display.value = result;
        currentExpression = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        let result = eval(currentExpression);
        result = Math.sqrt(result);
        display.value = result;
        currentExpression = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    currentExpression = currentExpression.slice(0, -1);
    display.value = currentExpression;
}

function handleKeyboardInput(event) {
    const key = event.key;

    // Check if the key is a digit or an operator
    const validKeys = /^[0-9+\-*/.%]$/;

    if (validKeys.test(key)) {
        event.preventDefault(); // Prevent default action of the key press
        if (key === '.') {
            // Ensure that the expression doesn't have multiple decimal points
            if (!currentExpression.includes('.')) {
                appendOperator(key);
            }
        } else {
            appendOperator(key);
        }
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        backspace();
    }
}

// Add event listener for keyboard input
document.addEventListener('keydown', handleKeyboardInput);