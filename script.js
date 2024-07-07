let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString(); // Store result for further calculations
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function resetCalculator() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}
