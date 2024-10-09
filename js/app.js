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
let num$3 = [10, 15, 20, 25, 30, 35, 40, 45, 50]
let result$3 = "N3:" + "<br>"
for (let i$3 = 0; i$3 < num$3.length; i$3++) {
    if (num$3[i$3] % 2 == 0) {
        result$3 += num$3[i$3] + ", "
    }
}
document.querySelector(".div3").innerHTML += result$3

// N4
let num$4 = [10, 15, 20, 25, 30, 35, 40, 45, 50]
let result$4 = "N4:" + "<br>"
for (let i$4 = 0; i$4 < num$4.length; i$4++) {
    if (num$4[i$4] % 2 == 1) {
        result$4 += num$4[i$4] + ", "
    }
}
document.querySelector(".div4").innerHTML += result$4;

// N5
let num$5 = [-10, 10, -20, 20, -30, 30, -40, 40, -50, 50]
let result$5 = "N5:" + "<br>"
for (let i$5 = 0; i$5 < num$5.length; i$5++) {
    if (num$5[i$5] > 0) {
        result$5 += num$5[i$5] + "," + " "
    }
}
document.querySelector(".div5").innerHTML += result$5

// N6
let num$6 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let result$6 = "N6:" + "<br>" + "Teskari tartibda:" + "<br>"
for (let i$6 = num$6.length - 1; i$6 >= 0; i$6--) {
    result$6 += num$6[i$6] + ", "
}
document.querySelector(".div6").innerHTML += result$6

// N7
let num$7 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let result$7 = "N7:" + "<br>"
let total$7 = 0
for (let i$7 = 0; i$7 < num$7.length; i$7++) {
    result$7 += num$7[i$7] + ", "
    total$7 += num$7[i$7]
}
document.querySelector(".div7").innerHTML = result$7 + "<br>" + "Yig`indisi:" + "  " + total$7;

// N8
let num$8 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let result$8 = "N8:" + "<br>"
for (let i$8 = 0; i$8 < num$8.length; i$8++) {
    num$8[i$8] *= 2;
    result$8 += num$8[i$8] + ", "
}
document.querySelector(".div8").innerHTML += result$8

// N9
let num$9 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let total$9 = num$9[0]
for (let i$9 = 0; i$9 < num$9.length; i$9++) {
    if (num$9[i$9] > total$9) {
        total$9 = num$9[i$9]
    }
}
document.querySelector(".div9").innerHTML = "N9:" + "<br>" + "Eng katta son:" + " " + total$9

// N10
let num$10 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let total$10 = num$10[0]
for (let i$10 = 0; i$10 < num$10.length; i$10++) {
    if (num$10[i$10] < total$10) {
        total$10 = num$10[i$10]
    }
}
document.querySelector(".div10").innerHTML = "N10:" + "<br>" + "Eng kichik son:" + " " + total$10

// N11
let num$11 = [-10, 10, -20, 20, -30, 30, -40, 40, -50, 50]
let result$11 = "N11:" + "<br>" + "Manfiy sonlar:" + "<br>"
for (let i$11 = 0; i$11 < num$11.length; i$11++) {
    if (num$11[i$11] < 0) {
        result$11 += num$11[i$11] + ", "
    }
}
document.querySelector(".div11").innerHTML += result$11

// N12
let num$12 = [-10, 20, 30, 40, -50]
let result$12 = "N12:" + "<br>"
let total$12 = 0
for (let i$12 = 0; i$12 < num$12.length; i$12++) {
    if (num$12[i$12] > 0) {
        total$12 += num$12[i$12]
    }
}
document.querySelector(".div12").innerHTML += result$12 + "Yig'indi: " + total$12;

// N13
let num$13 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let result$13 = "N13:" + "<br>"
for (let i$13 = 0; i$13 < num$13.length; i$13++) {
    result$13 += "Index:" + i$13 + " " + "Element:" + num$13[i$13] + "<br>"
}
document.querySelector(".div13").innerHTML += result$13

// N14
let num$14 = [10, 20, 30, 40, 50, 60, 70];
let result$14 = "N14:" + "<br>";
for (let i$14 = num$14.length - 1; i$14 >= 0; i$14--) {
    result$14 += "Indeks: " + i$14 + ", Element: " + num$14[i$14] + "<br>";
}
document.querySelector(".div14").innerHTML = result$14;

// N15
let num$15 = [10, 20, 30, 40, 50];
let result$15 = "N15:" + "<br>";
for (let i$15 = 1; i$15 < num$15.length; i$15++) {
    result$15 += "Indeks: " + i$15 + ", Element: " + num$15[i$15] + "<br>";
}
document.querySelector(".div15").innerHTML = result$15;