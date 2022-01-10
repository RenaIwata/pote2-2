document.addEventListener('DOMContentLoaded', function () {

    const valTarget = document.getElementById('js-val-target');
    let inputNum = "";
    const valGet = document.querySelectorAll('.js-val-get');
    const valClear = document.getElementById('js-clear');
    const valTotal = document.getElementById('js-total');
    const valZero = document.querySelectorAll('.js-val-zero');
    const valOperator = document.querySelectorAll('.js-operator');
    const valDot = document.querySelectorAll('.js-dot');
    let flagOperator = false;
    let flagDot = false;

    for (let i = 0; i < valGet.length; i++) {
        valGet[i].addEventListener('click', function (e) {
            inputNum += this.value;
            valTarget.value = inputNum;
        });
    }

    for (let i = 0; i < valZero.length; i++) {
        valZero[i].addEventListener('click', function (e) {
            if(inputNum.slice( 0, 1 ) == 0) {
                inputNum = "";
                valTarget.value = 0;
            }
        });
    }

    for (let i = 0; i < valOperator.length; i++) {
        valOperator[i].addEventListener('click', function (e) {
            if (flagOperator) {
                inputNum = inputNum.slice(0, -1);
                valTarget.value = inputNum;
            }
            flagOperator = true;
        });
    }

    for (let i = 0; i < valDot.length; i++) {
        valDot[i].addEventListener('click', function (e) {
            if (flagDot) {
                inputNum = inputNum.slice(0, -1);
                valTarget.value = inputNum;
            }
            flagDot = true;
        });
    }

    valClear.addEventListener('click', function (e) {
        inputNum = ""
        valTarget.value = 0;
        flagOperator = false;
        flagDot = false;
    });

    valTotal.addEventListener('click', function (e) {
        valTarget.value = eval(valTarget.value);
        inputNum = valTarget.value;
        flagOperator = false;
        flagDot = false;
    });
});