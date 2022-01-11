'use strict';
let hasDriversLicnese = false;
const passTest= true;

if( passTest){
    hasDriversLicnese= true;

}
console.log(hasDriversLicnese);

function logger(){

    console.log("this is output function");

}
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice=`juice with ${apples} apples and ${oranges} oranges`;
    return juice;

}

//fruitProcessor(5,7);
console.log(fruitProcessor(5,7));

const appleorangejuice=fruitProcessor(10,19);
console.log(appleorangejuice);


// function calAge(birthyear){
//     const currentyear=2037;
//     return currentyear - birthyear;

// }
console.log(calAge(1994));

//arrow function

const calcage3= birthyear1 =>2037-birthyear1;
const age3=calcage3(1950);
console.log(age3);

const yearsUntilRetirement =(birthyear2,firsstname)=>{
    const age4=2037-birthyear2;
    const retirement= 60-age4;
    return `${firsstname} retire in  ${retirement}`;

}
console.log(yearsUntilRetirement(1994,'ravi'));


//arrays
const friends =['ravi','vaibhav','aditya','shubham','mahesh'];

console.log(friends);

const years =new Array(1991,1992,1993,1994);

function calAge(birthyear){
    const currentyear=2037;
    return currentyear - birthyear;

}
const yy=[1991,1992,1993,1994];
const yy1=[];

for(let i=0;i<yy.length;i++){
    yy1.push[i]=yy[i];
    console.log(calAge(yy[i]));
    console.log(yy1[i]);
    yy1.pop();

}

