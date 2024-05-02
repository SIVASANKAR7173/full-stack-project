function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        document.getElementById('result').innerText = 'Please enter valid height and weight.';
        return;
    }

    var bmi = weight / (height * height);
    
    document.getElementById('result').innerText = 'Your BMI is ' + bmi.toFixed(2);
}