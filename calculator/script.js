// script.js
const resultField = document.getElementById('result');

// Append value to the display
function appendValue(value) {
    resultField.value += value;
}

// Clear the display
function clearDisplay() {
    resultField.value = '';
}

// Delete the last character
function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        // Use eval for simplicity (not recommended for production)
        resultField.value = eval(resultField.value);
    } catch (error) {
        alert('Invalid Input');
    }
}
