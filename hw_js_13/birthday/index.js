const birthday = document.querySelector('#date');
const result = document.querySelector('#result');
function calculateDiff() {
    const birthCalc = birthday.value;
    const ms = Date.parse(birthCalc);
    const today = Date.now();
    const difference = Math.floor((ms - today) / 1000 / 3600 / 24);




    /* ПЕРВЫЙ ВАРИАНТ
    dayright = ""

    if (difference > 4 && difference < 21) dayright = " дней"
    else if (difference == 1) dayright = " день"
    else
        if (difference == 2 || difference == 3 || difference == 4) dayright = " дня"


    if (difference < 0) {
        document.querySelector('.text span').innerText = ("Дата меньше текущей");

    }

    else if (difference >= 0) {
        document.querySelector('.text span').innerText = ("До дня рождения осталось "
            + difference + dayright);

    }

    document.querySelector('.error span').innerText = "";
    if (birthday.value == '') {
        document.querySelector('.error span').innerText += ("Дата рождения не заполнена");
        document.querySelector('.text span').innerText = ("");
    }
*/

    dayright = ""


    if (difference % 10 === 1 && difference % 100 !== 11) dayright = " день"
    else
        if (difference % 10 >= 2 && difference % 10 <= 4 && (difference % 100 < 10 || difference % 100 >= 20)) dayright = " дня"
        else dayright = " дней";

    if (difference < 0) {
        document.querySelector('.text span').innerText = ("Дата меньше текущей");

    }

    else if (difference >= 0) {
        document.querySelector('.text span').innerText = ("До дня рождения осталось "
            + difference + dayright);

    }

    document.querySelector('.error span').innerText = "";
    if (birthday.value == '') {
        document.querySelector('.error span').innerText += ("Дата рождения не заполнена");
        document.querySelector('.text span').innerText = ("");
    }



    document.querySelector('.calc').onclick = calculateDiff;

}