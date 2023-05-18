//conditional statments
let num = 100;

if(num > 70){
    console.log("You have passed");
}

console.log('________');


let num2 = 200;
if (num2>100 ) {
    console.log('its greater than 100');
} else {
    console.log("its not greater than 100");
}
console.log('----');
//if the num 2 is greater than 150 -- super number
//if its between 100-150-- cool Number
//else ok number

if (num2 > 150) {
    console.log('Super Number');
} else if(num2 > 100){
console.log('cool number');
}else{
    console.log('ok number');
}
console.log('-------');

let season = "Spring";

switch (season) {
    case "Spring":
        console.log("go Hiking");
        break;
    case "Summer":
        console.log("go swimming");
        break;
    case "Fall":
    console.log('Go to school');
        break;
    case "winter":
        console.log("go make a snowman");
        break;
    default:
        break;
}