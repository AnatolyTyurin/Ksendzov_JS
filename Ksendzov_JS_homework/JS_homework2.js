// 1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
function f1(p1,p2){
    let sum_p1_p2 = p1 + p2
    console.log("Sum of numbers = ", sum_p1_p2)
}
f1(2,105);

// 2) Сделать функцию которая вернёт в консоль квадрат переданного числа
function f2(p1){
    let Square_p1 = p1 * p1
    console.log("Square of number = ", Square_p1)
}
f2(8);

// 3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON {"name":И, "surname":Ф, "middlename":О}
function f3(name,surname,middlename){

    console.log(JSON.stringify({name,surname,middlename}))

    }
f3("Anatoly", "Tyurin", "Mikhailovich")

// 4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход принимает массив чисел. Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"

// вариант из интернета:

function even(arr, func) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (func(val)) {
        result.push(val);
      }
    }
  
    return result;
  }
  
  let arr = [1,7,4,18,5,2,99,100];
  
  console.log(even(arr, function(a) {
    return a % 2 == 0;}));

// мой вариант:

function even(array) {
  let n = [];
  for (let i = 0; i < array.length; i++)
  {if (array[i] % 2 == 0){
    n.push(array[i]);
  }
}
  return n;
}

let array = [1,7,4,18,5,2,99,100];

if (even(array) != "")console.log(even(array))
else{console.log("No even numbers")}

// 5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове. Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".

function f4(word){
    let a = word.match(/a/gi)
            if (a != null)
            {console.log(a.length)}
            else(console.log("No a characters"))
}
f4("Anatoly")