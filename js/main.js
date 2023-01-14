// Завдання 1

let users = ['Mike', 'Nikola', 'Tom'];

console.log(users);
console.log(users[1]);

users[1] = 'Alex';
console.log(users);

users.splice(1, 2);
console.log(users);

console.log(users.length);




// Завдання 2

let a = [5, 3, -4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 5, 25];

let arrLength = (a, b) => {

    if (a.length > b.length) {
        console.log('Масив a більший за масив b');
    } else if (a.length < b.length) {
        console.log('Масив b більший за масив a');

    } else if (a.length == b.length) {
        console.log('Масив a дорівнює масиву b');
    }

}

arrLength(a, b);



// Завдання 3

let phrase = 'I am learninig JavaScript right now';

phrase = phrase.split(' ')

console.log(phrase);



// Завдання 4 

let aArr = [5, 4, 8, 5, 3, 2, 1, 2];
let bArr = [];

aArr.forEach((arr) => {

    if(!bArr.includes(arr)) {
        bArr.push(arr);
    }
});

console.log(bArr);



// Завдання 5

let usersAge = [
    { id: 1, age: 17},
    { id: 2, age: 18},
    { id: 3, age: 19},
    { id: 4, age: 21},
    { id: 5, age: 17},
    { id: 6, age: 20},
    { id: 7, age: 25}
];

function selectionAge (arr){
let a = arr.filter(user => user.age > 18 && user.age < 21);
for (let i = 0; i < a.length; i++){
console.log(a[i].id);
}
}

selectionAge(usersAge);