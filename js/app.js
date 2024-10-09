// Massiv ga oid masalalar
// N1
let num1 = [10, 20, 30, 40, 50];
document.querySelector('.div_1').innerHTML = "N1:" + "<br>" + "birinchi element: " + num1[0] + "<br>" + "oxirgi element: " + num1[num1.length - 1];

// N2

let greet = ["Hello", "Namaste", "Bonjur", "Nihao", 50];
greet[4] = "Salom";
document.querySelector(".div_2").innerHTML = "N2" + "<br>" + greet

// N3
let fruit = []
fruit.push("Apple , Banana , Orange , Pineapple ")
document.querySelector(".div_3").innerHTML = "N3:" + "<br>" + fruit

// N4
let num4 = [100, 200, 300, 400, 500, 600, 700, 800, 900]
let tall_4 = num4.length
document.querySelector(".div_4").innerHTML = "N4:" + "<br>" + "Massivning uzunligi: " + tall_4

// N5
let num5 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
num5.push(1000);
document.querySelector(".div_5").innerHTML = "N5:" + "<br>" + "Yangi massiv: " + num5.join(", ");

// N6
let num6 = [100, 200, 300, 400, 500, 600, 700, 800, 900]
num6.pop()
document.querySelector(".div_6").innerHTML = "N6:" + "<br>" + num6.join(", ")

// N7
let num7 = [100, 200, 300, 400, 500, 600, 700, 800, 900]
num7.unshift(50)
document.querySelector(".div_7").innerHTML = "N7:" + "<br>" + num7.join(", ")

// N8
let num8 = [100, 200, 300, 400, 500, 600, 700, 800, 900]
num8.shift()
document.querySelector(".div_8").innerHTML = "N8" + "<br>" + num8.join(", ")

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