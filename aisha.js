// объекты
let user = {
    name: 'Alex',
    age: 18
}
console.log(user);
// массивы 
let users = [] 

let users2 = new Array()



let fruits = [ "apple", "Orange", "plum"]
//                 0        1        2
fruits[1] = 'banana'
fruits[3] = 'Kiwi'
fruits[6] = 'pomelo'
console.log(fruits);

console.log(fruits.length); // длина массива


let abc = [1, "abc", true, [], {},  Symbol(), 444n, function a(){}]
console.log(abc);


// методы pop/push, shift/unshift
let fruits2 =  [ "apple", "Orange", "plum"]
//pop() удаляет последний элемент(с конца)
console.log(fruits2.pop());//удаляет последний элемент(с конца).

console.log(fruits2);

// push() добавляет последнйи элемент (в конец массива)
let fruits3 =  [ "apple", "Orange", "plum"]
fruits3.push('kiwi')
console.log(fruits3);

// shift() удаляет первый элемент 

let fruits4 =  [ "apple", "Orange", "plum"]
console.log(fruits4.shift());
console.log(fruits4);

// unshift() добавляет первый элемент (в начале массива)
let fruits5 =  [ "apple", "Orange", "plum"]
console.log(fruits5.unshift('kiwi'));
console.log(fruits5);



