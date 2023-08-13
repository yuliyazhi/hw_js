
const result = document.getElementById('result');

function calculateBMI() {

    const hight = Number(document.getElementById("hight").value) / 100;
    const kg = Number(document.getElementById("kg").value);
    const hightMuch = Math.pow(hight, 2);
    const sum = kg / hightMuch;
    resRound = Math.round(sum * 100.0) / 100;

    if (18.5 >= resRound) {
        document.getElementById("result").innerHTML = `ВАШ РЕЗУЛЬТАТ: ${resRound} Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем`;
    } else if (resRound > 18.5 && resRound <= 24.9) {
        document.getElementById("result").innerHTML = `ВАШ РЕЗУЛЬТАТ: ${resRound} Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.`;
    } else if (resRound > 24.9 && resRound <= 29.9) {
        document.getElementById("result").innerHTML = `ВАШ РЕЗУЛЬТАТ: ${resRound} Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.`;
    } else if (resRound > 29.9 && resRound <= 34.9) {
        document.getElementById("result").innerHTML = `ВАШ РЕЗУЛЬТАТ: ${resRound} Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.`;
    } else if (resRound > 34.9 && resRound <= 39.9) {
        document.getElementById("result").innerHTML = `ВАШ РЕЗУЛЬТАТ: ${resRound} Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.`;
    } else if (resRound >= 40) {
        document.getElementById("result").innerHTML = `ВАШ РЕЗУЛЬТАТ: ${resRound} Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.`;

    };
}

