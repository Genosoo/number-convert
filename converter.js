function convertNumber() {
    // Get the decimal input value
    const decimalInput = document.getElementById('decimalInput').value;
    const decimalNumber = parseInt(decimalInput, 10);

    if (isNaN(decimalNumber)) {
        alert("Please enter a valid decimal number.");
        return;
    }

    // Convert to binary, octal, and hexadecimal
    const binary = decimalNumber.toString(2);
    const octal = decimalNumber.toString(8);
    const hex = decimalNumber.toString(16).toUpperCase();

    // Display the results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Octal: ${octal}</p>
        <p>Hexadecimal: ${hex}</p>
        <p>Binary: ${binary}</p>
    `;
}
