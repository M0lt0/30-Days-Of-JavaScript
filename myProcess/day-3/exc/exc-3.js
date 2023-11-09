// Exercises: Level 1
let firstName = 'molto' ;
let lastName = 'michel';
let country = 'brazil';
let city = 'aracaju';
let age = 25;
let isMarried = false ;
let date = new Date();
let truthyValue = 4 < 5;
let truthyValueOne = 4 !== 5;
let truthyValueTow = 4 != 5 || 4 < 5;
let falsyValue = 4 > 5;
let falsyValueOne = 4 == 5;
let falsyValueTow = true == false;
let python ='python';
let jargon  ='jargon';
let dragon = 'dragon';

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(date));
console.log(typeof(10) == ('10'));
console.log(parseInt('9.8') == (10));
console.log(truthyValue, falsyValue);
console.log(truthyValueOne, falsyValueOne);
console.log(truthyValueTow, falsyValueTow);

console.log(4 > 3);  //true
console.log(4 >= 3); //true
console.log(4 < 3);  //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4);  //false
console.log(4 !== 4); //false
console.log(4 != '4'); //true
console.log(4 == '4'); //true
console.log(4 === '4'); //false
console.log(python.length == jargon.length );
console.log(4 > 3 && 10 < 12);  //true
console.log(4 > 3 && 10 > 12); //true
console.log(4 > 3 || 10 < 12);  //false
console.log(4 > 3 || 10 > 12); //false
console.log(!(4 > 3)); //true
console.log(!(4 < 3)); //true
console.log(!(false));  //false
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true
console.log(python.match('on'), dragon.match('on')); //false

console.log(date.getDay() + 1);
console.log(date.getMonth() + 1);
console.log(date.getDay() + 1);
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMinutes());
console.log(date.getFullYear()/4);  //Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log('----------------------------------------------------------------------------------------');
//Exercises: Level 2

//first script
const butnOne = document.getElementById('perimeter')
const butnTown = document.getElementById('area')

butnOne.addEventListener('click',areaCalc)
butnTown.addEventListener('click',perimCalc)



function areaCalc(){
let base = prompt('please enter the triangle');
let height = prompt('please enter the height');
console.log(base, height)
}
function perimCalc(){}



