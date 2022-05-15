
let operazione;
let valore_display = ''
let num;




//------------ scrivere più numeri ------------ 
function numero(number) {
    valore_display += number
    document.getElementById('calcolo').value = valore_display
    document.getElementById('calcolo').innerHTML = valore_display
}


function operatore(op) {
    valore_display += op
    document.getElementById('calcolo').value = valore_display
    document.getElementById('calcolo').innerHTML = valore_display
}



//------------ calcolo ------------ 
function risultatoDisplay() {
    operazione = document.getElementById('calcolo').value //assegno a operazione il valore di calcolo

    if (operazione.includes('+')) {
        num = operazione.split('+') // ottengo due stringhe 

        valore_display = +num[0] + +num[1] // trasformo in numero ed eseguo l'operazione 
        document.getElementById('calcolo').value = valore_display; //riporto il risultato nel display
        document.getElementById('risultato').innerHTML = valore_display


    } else if (operazione.includes('-')) {
        num = operazione.split('-')

        valore_display = +num[0] - +num[1]
        document.getElementById('calcolo').value = valore_display;
        document.getElementById('risultato').innerHTML = valore_display

    } else if (operazione.includes('*')) {
        num = operazione.split('*')

        valore_display = +num[0] * +num[1]
        document.getElementById('calcolo').value = valore_display;
        document.getElementById('risultato').innerHTML = valore_display
    } else {
        num = operazione.split('÷')

        valore_display = +num[0] / +num[1]
        document.getElementById('calcolo').value = valore_display;
        document.getElementById('risultato').innerHTML = valore_display
    }
}



// ------------ reset calcolo ------------ 
function reset() {
    valore_display = ''
    document.getElementById('calcolo').value = valore_display
    document.getElementById('calcolo').innerHTML = valore_display
}

