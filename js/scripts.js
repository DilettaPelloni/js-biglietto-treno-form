//seleziono gli elementi HTML input e li assegno a delle variabili
const kmInput = document.getElementById('km-input');
const ageInput = document.getElementById('age-input');
const buttonSubmit = document.querySelector('button');

// all'evento di click sul bottone viene eseguito il calcolo
buttonSubmit.addEventListener('click',
    function() {
        //vado a prendere i valori degli input
        const kilometers = parseInt(kmInput.value);
        const age = parseInt(ageInput.value);

        if (isNaN(kilometers) == true || kilometers < 0) {
            console.log('il valore inserito in KM non è valido. Inserire un valore valido, grazie.');
        }
        else {
            //calcolo il prezzo pieno
            const fullPrice = kilometers * 0.21;

            // scelgo lo sconto in base all'età e calcolo il prezzo finale
            let finalPrice = fullPrice;

            if (age >= 65) {
                finalPrice -= fullPrice * 40 / 100;
            }
            else if (age < 18) {
                finalPrice -= fullPrice * 20 / 100;
            }

            // arrotondo il prezzo finale
            finalPrice = finalPrice.toFixed(2);

            if (isNaN(age) == true) {
                //mostro il prezzo finale con avviso
                console.log(finalPrice, 'è stato applicato il prezzo pieno perchè non hai inserito l\'età');
            }
            else {
                //mostro il prezzo finale
                console.log(finalPrice);
            }
        }
    }
);
