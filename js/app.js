// Massiv ga oid masalalar:
// N1
let num1 = [10, 20, 30, 40, 50];
document.querySelector('.div_1').innerHTML = "N1:" + "<br>" + "birinchi element: " + num1[0] + "<br>" + "oxirgi element: " + num1[num1.length - 1];

// N2

let greet = ["Hello", "Namaste", "Bonjur", "Nihao", 50];
greet[4] = "Salom";
document.querySelector(".div_2").innerHTML = "N2" + "<br>" + greet;

// N3
let fruit = [];
fruit.push("Apple , Banana , Orange , Pineapple ");
document.querySelector(".div_3").innerHTML = "N3:" + "<br>" + fruit;

// N4
let num4 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
let tall_4 = num4.length;
document.querySelector(".div_4").innerHTML = "N4:" + "<br>" + "Massivning uzunligi: " + tall_4;

// N5
let num5 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
num5.push(1000);
document.querySelector(".div_5").innerHTML = "N5:" + "<br>" + "Yangi massiv: " + num5.join(", ");

// N6
let num6 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
num6.pop();
document.querySelector(".div_6").innerHTML = "N6:" + "<br>" + num6.join(", ");

// N7
let num7 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
num7.unshift(50);
document.querySelector(".div_7").innerHTML = "N7:" + "<br>" + num7.join(", ");

// N8
let num8 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
num8.shift();
document.querySelector(".div_8").innerHTML = "N8" + "<br>" + num8.join(", ");

// N9
let num9 = [10, 20, 30, 40, 50];
let result9 = "N9:" + "<br>";
for (let i = 0; i < num9.length; i++) {
    result9 += num9[i] + ", ";
}
document.querySelector(".div_9").innerHTML = result9;

// N10
let num10 = [10, 20, 30, 40, 50];
let $num10 = 30;
if (num10.includes($num10)) {
    document.querySelector(".div_10").innerHTML = "N10:" + "<br>" + "Mavjud: " + $num10;
} else {
    document.querySelector(".div_10").innerHTML = "Mavjud emas: " + $num10;
}

// For loop ga oid masalalar:
// N1
let num$1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for (let i$1 = 0; i$1 < num$1.length; i$1++) {
    i$1 = ", "
}
document.querySelector(".div1").innerHTML = "N1:" + "<br>" + num$1

// N2
let fruit$2 = ["Aplle", "Pineapple", "Kakos", "Banana", "Orange"]
let result$2 = "N2:" + "<br>"
for (let i$2 = 0; i$2 < fruit$2.length; i$2++) {
    result$2 += fruit$2[i$2] + "," + "<br>";
}
document.querySelector(".div2").innerHTML = result$2;

// N3
let num$ = [10, 15, 20, 25, 30, 35, 40, 45, 50]