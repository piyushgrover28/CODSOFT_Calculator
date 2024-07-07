let displayValue = '';

function aD(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function cD() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function cR() {
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString(); // Store result for further calculations
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function rC() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}
