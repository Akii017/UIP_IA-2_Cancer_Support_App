document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiValue = document.getElementById('bmi-value');
    const bmiStatus = document.getElementById('bmi-status');
    const chestInput = document.getElementById('chest');
    const waistInput = document.getElementById('waist');
    const hipInput = document.getElementById('hip');
    const bodyImage = document.getElementById('body-image');
    const shapeBtn = document.getElementById('shape-btn');

    heightInput.addEventListener('input', calculateBMI);
    weightInput.addEventListener('input', calculateBMI);
    chestInput.addEventListener('input', calculateBodyShape);
    waistInput.addEventListener('input', calculateBodyShape);
    hipInput.addEventListener('input', calculateBodyShape);

    function calculateBMI() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (height > 0 && weight > 0) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
            bmiValue.textContent = bmi;
            updateHealthStatus(bmi);
        } else {
            bmiValue.textContent = '0.0';
            bmiStatus.textContent = '-';
        }
    }

    function updateHealthStatus(bmi) {
        if (bmi < 18.5) {
            bmiStatus.textContent = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiStatus.textContent = 'You’re Healthy';
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiStatus.textContent = 'Overweight';
        } else {
            bmiStatus.textContent = 'Obese';
        }
    }

    function calculateBodyShape() {
        const chest = parseFloat(chestInput.value);
        const waist = parseFloat(waistInput.value);
        const hip = parseFloat(hipInput.value);

        if (chest > waist && chest > hip) {
            shapeBtn.textContent = 'Inverted Triangle Body Shape';
            bodyImage.src = 'inverted-triangle.png';
        } else if (waist > chest && waist > hip) {
            shapeBtn.textContent = 'Apple Body Shape';
            bodyImage.src = 'apple-shape.png';
        } else if (hip > chest && hip > waist) {
            shapeBtn.textContent = 'Pear Body Shape';
            bodyImage.src = 'pear-shape.png';
        } else {
            shapeBtn.textContent = 'Rectangle Body Shape';
            bodyImage.src = 'rectangle-shape.png';
        }
    }
});
