const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || weight < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`;
    } else { 
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`;
        const p = document.createElement('p');
        if(bmi < 18.6){
            p.appendChild(document.createTextNode('You are underweight'));
            results.appendChild(p);
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            p.appendChild(document.createTextNode('You are normal weight'));
            results.appendChild(p);
        } else{
            p.appendChild(document.createTextNode('You are overweight'));
            results.appendChild(p);
        }
    }
});