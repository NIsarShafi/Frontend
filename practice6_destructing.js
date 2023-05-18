let names = ["CLark", "Bruce", "Barry", "Diana", "john"];
// store the first item and second item into a variable separately

//let firstItem = names [0];
//let secondItem = names [1];

// this is called destructing
//below code will take the first item and second item in names array
// and assign it to a variabale called firstItem, secondItem


let [firstItem, secondItem , x] = names;

console.log(firstItem);
console.log(secondItem);
console.log(x);

// you may also use destructing for objedct 
//to store the value of the fields in one shot
let c1 = {
    make: "Tesla",
    model: "X",
    year: 2023,
    color: "White"
}
console.log('_____');
//store the value of make and color into 2 variabales
let {make , color, year } = c1;
console.log(color);
console.log(make);
console.log(year);