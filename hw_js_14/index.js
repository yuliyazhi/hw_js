

let grades = Array.from({ length: 12 }, () => (Math.floor(Math.random() * 100) + 1));
console.log(grades);
document.querySelector('.grades').innerText =
    ("Оценки студентов: " + grades);
//2
let middleGrade = grades.reduce(function (sum, elem) {
    return sum + elem;
}, 0);
document.querySelector('.middleGrade').innerText = ("Средний балл студентов: " + Math.round(middleGrade / grades.length));
console.log(Math.round(middleGrade / grades.length));

//3
let maxGrade = Math.max(...grades);
document.querySelector('.maxGrade').innerText = ("Максимальный балл: " + maxGrade);
console.log("max = " + maxGrade);
//4

let minGrade = Math.min(...grades);
document.querySelector('.minleGrade').innerText = ("Минимальный балл: " + minGrade);
console.log("min = " + minGrade);

//5

let goodGrade = grades.filter(elem => elem >= 60);
console.log(goodGrade.length);

//6
let badGrade = grades.filter(elem => elem < 60);
console.log(badGrade.length);

student = ""
if (goodGrade.length === 1) student = " студент"
else
    if (goodGrade.length >= 2 && goodGrade.length <= 4) student = " студента"
    else student = " студентов";
document.querySelector('.goodGrade').innerText = ("Положительную оценку получили " + goodGrade.length + student);

if (badGrade.length === 1) student2 = " студент"
else
    if (badGrade.length >= 2 && badGrade.length <= 4) student = " студента"
    else student = " студентов";
document.querySelector('.badGrade').innerText = ("Отрицательную оценку получили " + badGrade.length + student);
//7


let alphGrade = grades.map((elem) => {


    if (elem >= 80) {
        return "A"
    }
    else if (elem >= 60 && elem <= 79) { return "B" }

    else if (elem >= 40 && elem <= 59) { return "C" }

    else if (elem >= 20 && elem <= 39) { return "D" }

    else { return "E" }

})
document.querySelector('.alphGrade').innerText = ("Оценки в буквенном выражении: " + alphGrade);

console.log(alphGrade)

/*и так можно
    if (elem >= 80) {      
          elem = "A"
    }
    else if (elem >= 60 && elem <= 79) { elem = "B" }
    else if (elem >= 40 && elem <= 59) { elem = "C" }
    else if (elem >= 20 && elem <= 39) { elem = "D" }
    else { elem = "E" }
    return elem
})*/

