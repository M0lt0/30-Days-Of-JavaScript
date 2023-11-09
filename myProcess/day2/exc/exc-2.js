// Exercise: Level 1
const butn = document.getElementsByClassName('mass');
let variable = '30 Days Of JavaScript';
let fang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let bec ='You cannot end a sentence with because because because is a conjunction';
let str = "";
// function myFun(){
//     alert('open the console please')
// }
// butn.addEventListener('click', myFun())



console.log(variable);
console.log(variable.length);
console.log(variable.toUpperCase());
console.log(variable.toLowerCase());
console.log(variable.substring(3));
console.log(variable.slice(3,-1));
console.log(variable.includes('Script'));
console.log(variable.split());
console.log(variable.split(' '));
console.log(fang.split(', '));
console.log(fang.replace("javaScript","python"));
console.log(fang.charAt(15));
console.log(fang.charCodeAt(11));
console.log(fang.indexOf('a'));
console.log(fang.lastIndexOf('a'));
console.log(bec.indexOf('because'));
console.log(bec.lastIndexOf('because'));
console.log(bec.search('because'));
console.log(variable.trim());
console.log(variable.startsWith('3'));
console.log(variable.endsWith('t'));
console.log(variable.match('a'));
console.log(str.concat( '30 Days of',  'JavaScript'));
console.log(variable.repeat(2));


//Exercise: Level 2

let partOne = ' There is no exercise better for the heart than reaching down and lifting people up.';
let partTow = 'help'
let tenAsString = '10';
let ten = 10;
let float = 9.8;
let wordOne = 'python';
let wordTow = 'jargon';
let sentence = 'I hope this course is not full of jargon';
let randomNumber = Math.random() * 101;
let randomVariant = (Math.random() * 51) + (Math.random() * 52); // to check again
let randomVariantTow = (Math.random() * 256);
let randomAccess = 'JavaScript';
let pattern = ' 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27\n 4 1 4 16 64 \n 5 1 5 25 125'



console.log(`The quote"${partOne}" by John Holmes teaches us to ${partTow} one another`);
console.log("Love is not patronizing and charity /'isn't/ about pity, it is about love. Charity and love are the same -- with charity you give love, so /'don't/ just give money but reach out your hand instead.");
console.log(typeof(tenAsString) == typeof(ten));
console.log(typeof(Number(tenAsString)) == typeof(ten));
console.log(parseFloat(float) == ten);
console.log(Math.ceil(float) == ten);
console.log(wordOne.match('on'), wordTow.match('on'))
console.log(sentence.match('jargon'))
console.log(randomNumber);
console.log(randomVariant);
console.log(randomVariantTow);
console.log(randomAccess.charAt(Math.floor(Math.random()*11)));
console.log(pattern);
console.log(bec.substring(0,31) ,bec.substring(54));



//Exercises: Level 3


let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' ;
let reg = /love/g;
let regTow = /%$@*&#/g;
let regthree = /D/ ;
let mixSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let salarySentence =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let arr = salarySentence.split(" ");
let  salary;
function calc(arr){

for(let i = 0 ; i < arr.length; i++){
    if( Number(arr.at(i)) == Number()){
        salary =+ salary ;
    }
}
}
console.log(love.search(reg)); // need t check
console.log(bec.match('because'));
console.log(mixSentence.replace(/%$@&#/g," ")); // need t check
console.log(salary);















