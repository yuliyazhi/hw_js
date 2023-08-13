const birthday = document.querySelector('#date');
const result = document.querySelector('#result');
function calculateDiff() {
    const birthCalc = birthday.value;
    const ms = Date.parse(birthCalc);
    const today = Date.now();
    const difference = Math.floor((ms - today) / 1000 / 3600 / 24);
    dayright = ""

    if (difference > 4 && difference < 21) dayright = " дней"
    else
        if (difference == 1) dayright = " день"
        else
            if (difference == 2 || difference == 3 || difference == 4) dayright = " дня"
            else dayright = " дней"

    document.querySelector('.text span').innerText = ("До дня рождения осталось "
        + difference + dayright);

    document.querySelector('.error span').innerText = "";
    if (birthday.value == '') {
        document.querySelector('.error span').innerText += ("Дата рождения не заполнена");
        document.querySelector('.text span').innerText = ("");
    }
}
document.querySelector('.calc').onclick = calculateDiff;

