// for loop 
for (let i = 0; i < 10; i++  ){
    console.log(i);
}

console.log('_____');

// while loop 
let x = 1; 
while (x<6) {
    console.log(x);
    x++; 
}

console.log('_______');


// do while loop
let y = 1; 

do {
    console.log(y);
    y++; 
} while (y<6);


console.log('_____');

let names = ["Clark", "Bruce", "Barry", "Diana", "John"];
for (let i = 0; i < names.length; i++  ){
    console.log(names[i]);
}


console.log('_______-------');

names.forEach( each => console.log(each ) );