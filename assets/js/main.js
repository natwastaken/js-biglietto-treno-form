






const buttonGenera = document.getElementById('genera');

buttonGenera.addEventListener('click', function () {
    // controllo i valori inseriti dall'utente
    const nameUser = document.getElementById('name-user').value;
    const km = document.getElementById('km').value;
    const fascia = document.getElementById('fascia-eta').value;

    //calcolo prezzo
    // standard
    let price = 0.21 * km;

    //calcolo scontistica
    // minorenne
    if (fascia == "minorenne") {
        price -= (price * 20 / 100);
    } else if (fascia == 'over65') { //over65
        price -= (price * 40 / 100);
    }

    console.log(fascia, price);

    const nameUserPrint = document.getElementById('name-user-print');
    // nameUserPrint.append(nameUser);
    nameUserPrint.innerHTML = nameUser;

    const pricePrint = document.getElementById('price');
    pricePrint.innerHTML = price.toFixed(2);

    const carrozzaPrint = document.getElementById('carrozza');
    const cpPrint = document.getElementById('cp');

    carrozzaPrint.innerHTML = Math.floor(Math.random() * 12) + 1;
    cpPrint.innerHTML = Math.floor(Math.random() * 10000) + 9000;

});

const buttonAnnulla = document.getElementById('annulla');

buttonAnnulla.addEventListener('click', function () {
    const nameUser = document.getElementById('name-user');
    const km = document.getElementById('km');
    const fascia = document.getElementById('fascia-eta');

    nameUser.value = '';
    km.value = '';
    fascia.value = 'standard';

    const nameUserPrint = document.getElementById('name-user-print');
    const pricePrint = document.getElementById('price');
    const carrozzaPrint = document.getElementById('carrozza');
    const cpPrint = document.getElementById('cp');

    nameUserPrint.innerHTML = '';
    pricePrint.innerHTML = '';
    carrozzaPrint.innerHTML = '';
    cpPrint.innerHTML = '';

});