//seleziono gli elementi HTML input e li assegno a delle variabili
const fullnameInput = document.getElementById('fullname-input');
const kmInput = document.getElementById('km-input');
const ageInput = document.getElementById('age-input');
const buttonSubmit = document.querySelector('.button-box button');

// all'evento di click sul bottone viene eseguito il calcolo
buttonSubmit.addEventListener('click',
    function() {
        //rendo invisibili le box
        document.getElementById('result-box').style.display = 'none';
        document.getElementById('error-box').style.display = 'none';
        //vado a prendere i valori degli input
        const fullname = fullnameInput.value;
        const kilometers = parseInt(kmInput.value);
        const age = ageInput.value;

        if (isNaN(kilometers) == true || kilometers < 0) {
            document.getElementById('error-box').style.display = 'block';
            document.getElementById('error-message').innerHTML = 'Il valore inserito nel campo \"Km da percorrere\" non è valido. Per favore inserisci un numero (non sono ammessi numeri negativi)';
        }
        else {
            //calcolo il prezzo pieno
            const fullPrice = kilometers * 0.21;

            // scelgo lo sconto in base all'età e calcolo il prezzo finale
            let finalPrice = fullPrice;

            if (age == 'silver') {
                finalPrice -= fullPrice * 40 / 100;
            }
            else if (age == 'minorenne') {
                finalPrice -= fullPrice * 20 / 100;
            }

            // arrotondo il prezzo finale
            finalPrice = finalPrice.toFixed(2);

            //mostro il ticket
            document.getElementById('result-box').style.display = 'block';
            document.getElementById('fullname-display').innerHTML = fullname;
            document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10 ) + 1;
            document.getElementById('cp-code').innerHTML = Math.floor(Math.random() * (999999 - 900000 + 1) + 900000);
            document.getElementById('final-price').innerHTML = finalPrice + ' €';

            if (age == 'null') {
                document.getElementById('offer').innerHTML = 'Standard';
                document.getElementById('error-box').style.display = 'block';
                document.getElementById('error-message').innerHTML = 'Siccome non hai inserito la fascia d\'età, il prezzo è stato calcolato con la tariffa standard. Per verificare se hai diritto ad una tariffa scontata, seleziona la tua fascia d\'età';
            }
            else {
                document.getElementById('offer').innerHTML = age;
            }
        }
    }
);
