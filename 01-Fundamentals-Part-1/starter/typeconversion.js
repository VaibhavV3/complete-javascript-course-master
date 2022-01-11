//type conversion
const inputYear= "1991";
console.log(inputYear);

console.log(inputYear+18);

console.log(Number(inputYear) + 18 +` is a number`);

console.log(Number("jonaas"));
console.log(typeof(NaN));

console.log(String(23333) ,23333);

//type coercion

console.log('i am '+ 23 +" years old");

console.log(` i am 23 years old this is a string template`);

console.log('23' -'34'-44);

console.log("55"*33);
console.log("23 "/"44");

let n='1' + 1;
n=n-1;
console.log(n);

console.log(1+2+3+5+"44");

//5 falsy values : 0,'',undefined,null,NaN 

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('ravi'));
console.log(Boolean(null));

console.log(Boolean(''));
console.log("curly braces "+Boolean({}));

const money =10;
if(money){
    console.log("dont spend it all");

}else{
    console.log("you should get a job");

}

let height;
if(height){
    console.log("yay! height is defined");

}else{
    console.log("height is undefined");

}



const age=18;
if(age===18)
{
    console.log("you just became an adult");

}else{

}

//const favourite = prompt("whats your favorite no");

//console.log(favourite);
const haDriverLicense= true;
const hasGoodVision=false;

console.log(haDriverLicense&& hasGoodVision);

console.log(hasGoodVision ||haDriverLicense);

console.log(!haDriverLicense);
console.log(!hasGoodVision);



//switch statement
 const day= 'monday';
 switch(day){
     case "monday":
         console.log("monday");
         console.log("go for coding");
         break;
     case "tuesday":
             console.log("tuesday for gaming");
             break;
      case "thursday":
          console.log("thrsday");
          break;
    default :
      console.log("no one is right");


 }

// statements and expression

//ternary operator
const agenew= 18;
agenew >=18 ?console.log("you allowed to drink"):console.log("YOU ARE NOT ALLOWED TO DRINK");

