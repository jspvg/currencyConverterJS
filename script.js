const valuta1Input = document.getElementById('valuta1');
const valuta2 = document.getElementById('valuta2');
const error = document.getElementById('error');
const valuta1Label = document.getElementById('valuta1Label');
const valuta2Label = document.getElementById('valuta2Label');
const calculateBtn = document.getElementById('calculateBtn');
const changeBtn = document.getElementById('changeBtn');


valuta1Input.addEventListener('input', function(){
    if(isNaN(valuta1Input.value)){
        alert('Nije unesen broj!');
        valuta1Input.value = null;
    }
});

function calculateCurrency(){
    valuta2.removeAttribute('disabled');
    if(valuta1Label.innerText === 'BAM') valuta2.value = `${valuta1Input.value * 1.95}`;
    else valuta2.value = `${valuta1Input.value / 1.95}`;
}

function validateInput(){
    if(!valuta1Input.value){
        error.classList.remove('hide');
        error.innerText = 'Vrijednost nije unesena!';
        return 0;
    }
    
    return 1;
}

calculateBtn.addEventListener('click', function(){
    const valuta1 = parseFloat(valuta1Input.value);
    console.log(valuta1);

    if(validateInput()){
        calculateCurrency();
    }
});

changeBtn.addEventListener('click', function(){
    let pom1 = valuta1Label.innerText, pom2 = valuta1Input.value;
    valuta1Label.innerText = valuta2Label.innerText;
    valuta1Input.value = valuta2.value;
    valuta2Label.innerText = pom1;
    valuta2.value = pom2;


});