const colors = ["red", "green", "blue", "yellow"];
console.log("Выводим элэменты");
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log("do-while и for");
let num1 = 1;
do {
    console.log(num1 * num1);
    num1++;
} while (num1 <= 10);

for (let num2 = 1; num2 <= 10; num2++) {
    console.log(num2 * num2);
}
console.log("c for");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}