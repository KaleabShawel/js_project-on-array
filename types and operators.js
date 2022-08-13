let _val = 500;

_val=400;
document.write("<center>");

showMessage(" changing variable values" +" "+ _val);

document.write("&nbsp <b>1. Numbers</b>"+"<br/>");
document.write("<br/>");
let price = 20.99;
document.write(typeof price +" <br/>");
let price2 = "200,33";
document.write("<br/>");

document.write(typeof price2 +"<br/>");

document.write("<br/>");

 document.write("&nbsp;<b>2. Operators</b> <br/>");
 document.write("<br/>");

 let num = 10;
 num+=5;
 document.write("Addition operator: " + num + "<br/>");
 document.write("<br/>");

 let num1 = 10;
 num1-=5;
 document.write("Subtarction operator: "+ num1 +"<br/>");
 document.write("<br/>");
 let num2 = 10;
 num2*=5;
 document.write("Product operator: " + num2 + "<br/>");
 document.write("<br/>");

 let num3 = 10;
 num3/=5;
 document.write("Division operator: " + num3+ "<br/>");
 document.write("<br/>");

 let num4 = 10;
 num4%=5;
 document.write("Reminder operator: " + num4 + "<br/>");
 document.write("<br/>");

 let num5 = 15, num6 = 30;
 document.write( "Other method for doing operations: "+num5*num6 +"<br/>");
 document.write("<br/>");

 let num7 = 10;
 document.write("preincrement: "+ ++num7 +"<br/>");
 document.write("<br/>");

 let num8 = 10;
 document.write("postincrement: "+ num8++ +"<br/>");
 console.log(num8);
 document.write("<br/>");

 document.write("&nbsp; <b> 3. Operator precedence </b>" + "<br/>");
 document.write("<br/>");
 let num9 = 3+2*2;
 document.write("Product and division calculate first this is Javascript precedence: "+num9 +"<br/>");
 document.write("<br/>");

 let num10 = (3+2)*2;
 document.write("Any thing in the parentheses execute first: " +num10 +"<br/>");
 document.write("<br/>");

 let num11 = 1.4 + 2.4;
 document.write("Adding decimal numbers or precision of js: "+num11+"<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>4. Strings </b>"+ "<br/>");
 document.write("<br/>");
 let first = 'Hello World';
 document.write("Defined String: "+first +" <br/>");
 document.write("<br/>");
  
 let message1 = "\"Hello World\"";
 document.write("Defined String with qoutation: "+message1 +" <br/>");
 document.write("<br/>");

 let name = 'Sami';
 let message2 = `Hello ${name}`;
 document.write("Concatenate using Backtick: " + message2 + "<br/>");
 document.write("<br/>");

 document.write("&nbsp <b> 5. Manipulating Strings </b>"+ "<br/>");
 document.write("<br/>");

 let message3 = 'Hello';
 let message4 = message3 + 'world';
 document.write("Normal concatenation: "+ message4 + "<br>");
 document.write("<br/>");
 
 document.write("&nbsp <b> 5.1 Methods </b>"+ "<br/>");
 document.write("<br/>");
 let message5 = 'HELLO';
 message5 = message5.toLowerCase();
 document.write("Converting string to lowercase: "+ message5+ "<br/>");
 document.write("<br/>");

 let message6 = 'hello';
 message6 = message6.toUpperCase();
 document.write("Converting string to uppercase: "+ message6+ "<br/>");
 document.write("<br/>");

 let message7 = 'Hello';
 message7 = message7.substring(3);
 document.write("Starting the string from the given index: " +message7+"<br/>");
 document.write("<br/>");

 document.write("&nbsp <b> 5.2 Property </b>"+ "<br/>");
 document.write("<br/>"); 
 let message8 = 'Hello world';
 message8 = message8.length;
 document.write("Show the length of the String: "+message8+"<br/>");
 document.write("<br/>");

 let message9 = '123';
 document.write("we cannot add number on the string: "+ message9+2+"<br/>");
 document.write("<br/>");
 let message10 = 123;
  message10 += 2;
 document.write("Now we can add any number because the value number: "+message10 +"<br/>");
 document.write("<br/>");

 document.write("&nbsp <b>6. Coverting numbers to string</b> <br/>");
 document.write("<br/>");
 let amount = 123;
 amount = amount.toString();
 document.write("This method change numbers to string: "+typeof  amount+ "<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>6.1 Coverting strings to number</b> <br/>");
 document.write("<br/>");
 let amount1 = Number.parseFloat('123.12');
 document.write("This method change strings to number: "+typeof amount1+"<br/>");
 document.write("<br/>");
 let amount2 = Number.parseFloat('A123.12');
 document.write("<br/>");
 document.write("When we need to convert string to number we just make sure that the beging of the string is a number: "+"<u>"+amount2+"</u>"+"<br/>");
 document.write("<br/>");

 document.write("&nbsp <b>7.Boolean variables</b>"+"<br/>");
 document.write("<br/>");
 let saved = false;
 document.write("This is typeof method value: "+typeof saved+"<br/>");
 document.write("<br/>");
 let saved1 = true;
 document.write("This is boolean value: "+ saved1+"<br/>");
 document.write("<br/>");
 let saved3 = true;
 saved3 = !true;
 document.write("This is negation boolean value: "+saved3+"<br/>");
 document.write("<br/>");

 document.write("&nbsp <b>8. Null and Undefined Types</b> <br/>");
 document.write("<br/>");
 let saved4;
 document.write("This message is not defined when it is declared!"+saved4+"<br/>");
 document.write("<br/>");
 let saved5 = 20;
 saved5 = null;
 document.write("The value is intentionally removed or empty: "+saved5+"<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>9. Objects and Symbols</b> <br/>");
 document.write("<br/>");
 let person = { 
    firstname:'Kaleab',
    lastname:'Shawel'
 };
 document.write("<center>");
 document.write("This is a typeof value: "+ typeof person+"<br/>");
 document.write("<br/>");
 document.write("This is the name of the object: "+ person.firstname+ " "+ person.lastname+"<br/>");
 document.write("</center>");
 document.write("<br/>");
 document.write("&nbsp <b>10. Program Flow</b> <br/>");
 if (5===5){
   document.write("yes"+"<br/>");
   console.log("true");
 }
 document.write("<br/>");
 let small=5;
 let big=10;
 if (small>big){
   console.log ('No');
   document.write("No"+"<br/>");
   
 }
 document.write("<br/>");
 let num12 = 20;
 if(num12>15){
   document.write("True"+"<br>");
 }
 document.write("<br/>");
 let state = "FL";
 let taxpercent = 7;
 if (state!=="FL"+"<br/>"){
   taxpercent=0;
 }
 document.write(taxpercent);
 document.write("<br/>");

 document.write("&nbsp <b>11. Truthy and Falsy</b> <br/>");
 if ("0"){
   document.write("True"+"<br/>");
 }
 document.write("<br/>");
 if (0){
   document.write("false"+"<br/>");
   console.log('false');
 }
 document.write("<br/>");
 if (1.1+1.3!==2.4){
   document.write("true"+"<br/>");
 }
 let price3 = 20;
 if (price3<10){
   document.write("True","<br/>");
   document.write("<br/>");
 }
 
 else{
   document.write("<br/>");
   document.write("False", "<br/>");
 }

 if(1==="1"){
   document.write("True"+"<br/>");
 }
 else{
   document.write("<br/>");
   document.write("Fales"+"<br/>");
 }
 document.write("<br/>");
 document.write("&nbsp <b>12.The Ternary Operator</b> <br/>");
 document.write("<br/>");
 let price4=20;
 let message11=(price4<10)?'yes':'No';
 document.write(message11+"<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>13.Block scope using let</b> <br/>");
 document.write("<br/>");
 if(true){
   let value2 = 'yes';
   document.write(value2+"<br/>");
 }
 document.write("<br/>");
 document.write("&nbsp <b>14.Looping </b> <br/>");
 document.write("for loop:");
 for(let i=0;i<5;i++){
   
   document.write("<br/>",i);
 }
 document.write("<br/>");
 document.write("while loop:");
 let count = 1;
 while (count<5){
   document.write("<br/>",count);
   count++;
 }
 document.write("<br/>");
 document.write("while loop:");
 let i=4;
 while(i>0){
   document.write("<br/>",i);
   i--;
 }
 document.write("<br/>");
 document.write("do...while loop:");
let j=-4;
do{
   document.write(" ",j);
   j--;
}while(j>0);
 document.write("<br/>");
 document.write("&nbsp <b>15. Function </b> <br/>");
 function logMessage(){
   document.write("Here is the message for function declaration and calling. <br/>");
 }
 logMessage();
 document.write("<br/>");
 logMessage();
 document.write("<br/>");
 let fn = function (){
   document.write("<br/>Here is the message for function expression and calling.");
 }
 fn();
 document.write("<br/>");
 fn();
 document.write("<br/>");
 /*let myFunction = function loggingFunction(){
  document.write("Here is a message");
  console.log("Here is a message");
 }
 loggingFunction();// error because we can't call fuction expression by the function name,, 
 //we call it by it's variable!!*/
 document.write("<br/>");
 document.write("&nbsp <b>16. Passing information to function </b> <br/>");
 document.write("<br/>");
 let myFunction2 = function (firstmessage, secondmessage){
  document.write(firstmessage," ");
  document.write(secondmessage);
 }
myFunction2("Hello","Sami !! <br/>");

document.write("<br/>");
 document.write("&nbsp <b>17. Function Return Values </b> <br/>");
 document.write("<br/>");
 function getSecretcode(valu){
  let code = valu * 42;
  return code;
 }
let secretCode = getSecretcode(2);
document.write("The value is: ",secretCode, "<br/>");
document.write("<br/>");
 document.write("&nbsp <b>18. Function Scope </b> <br/>");
 document.write("<br/>");
 let key = 35;
 function getSecretcode2(valu2){
  return valu2 * key;
 }
 let secretCode2 = getSecretcode2(4);
 document.write("This is the value it multiplied by it's Global scope :", secretCode2, "<br/>");
 document.write("<br/>");
 let key1 = 42;
 function getSecretcode3 (valu3){
  let keyGenerator = function(){
    let key2 = 12;
    document.write("In keyGenerator in local scope :", key2,"<br/>");
    return key2;
  }
  let code2 = valu3 * keyGenerator();
  document.write("In getSecretcode3: ", key1, "<br/>");
  return code2;
 } 
 let secretCode3 = getSecretcode3(5);
 document.write("This the value of keyGenerator Nested function: ",secretCode3,"<br/>"); 
 document.write("<br/>");
 document.write("&nbsp <u><b>19. Objects and the DOM </b></u> <br/>");
 document.write("<br/>");
 document.write("&nbsp <b>19.1 Objects Creation </b> <br/>");
 document.write("<br/>");
 let person2 = {
  name:'John',
  age:24,
  partTime:false
 };
 document.write("The person name: ",person2.name,"<br/>");
 document.write("The person Age: ",person2.age,"<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>19.2 To change the property values by dot syntax: </b> <br/>");
 document.write("<br/>");
 let person3 = {
   name:'John',
   age: 24,
   partTime:false
 };
person3.age=26;
document.write("Change the person age: ",person3.age,"<br/>");
document.write("<br/>");
document.write("&nbsp <b>19.3 To change the property values by square brace syntax: </b> <br/>");
document.write("<br/>");
let person4 = {
  name:'John',
  age: 26,
  partTime:false
};
person4 ['age']=30;
document.write("Change the person age: ",person4.age,"<br/>");
document.write("<br/>");
 document.write("&nbsp <b>19.4 Using special data type Symbol  </b> <br/>");
 document.write("<br/>");
 let mySymbol = Symbol();
 let person5 ={
  name:'John',
  age:30,
  partTime:false,
  [mySymbol] : 'This is secret information'
 };
 document.write(person5[mySymbol],"<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>20. Object Methods </b> <br/>");
 document.write("<br/>");
 let person6 = {
  name:'John',
  age:30,
  partTime:false,
  showInfo : function(){
    document.write("The person name is: ",this.name,"<br/>");
    document.write("<br/>");
  }
 };
 person6.showInfo();
 let person7 = {
  name:'John',
  age:30,
  partTime:false,
  showInfo2 : function(realAge){
    document.write(this.name," ","is:"," ",realAge,"<br/>")
  }
 };
 person7.showInfo2(35);
 document.write("<br/>");
 document.write("&nbsp <b>21. Passing objects to functions </b> <br/>");
 document.write("<br/>");
 let message12 ='Hello';
 function changeMessage(message12){
   message12='Hi';
 } 
 changeMessage(message12);
 document.write("This is The first Message: ",message12,"<br/>");
 document.write("<br/>");
 let person8 = {
  name:'John',
  age:35,
  
 };
 function incrementAge(p){
    p.age++;
}
incrementAge(person8);
document.write("The person realage: ",person8.age,"<br/>");
document.write("<br/>");
 document.write("&nbsp <b>22. Standard Built-in objects </b> <br/>");
 document.write("<br/>");
 let now = new Date();
 document.write(now.toDateString(),"<br/>");
 document.write("<br/>");
 document.write("Built-in method absolute value: ",Math.abs(-42),"<br/>");
 document.write("<br/>");
 document.write("Built-in method random number: ",Math.random(),"<br/>");
 document.write("<br/>");
 let char = "Hello World";
 document.write("Built-in String method: ",char.charAt(6),"<br/>");
 document.write("<br/>");
 let no = "34";
 let no2= Number.isNaN(no);
 document.write("Built-in method in checking Number: ",no2,"<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>23. Styling DOM Elements </b> <br/>");
 document.write("<br/>");
 document.write("</center>");
 document.write("<br/>");
 document.write("&nbsp <b>25. Creating and initializing Arrays </b> <br/>");
 document.write("<br/>");
 let value4 = [1,2,3];
 document.write("Using variable: ",value4,"<br/>");
 document.write("<br/>");
 let value5 = Array.of(1,2,3);
 document.write("Using Array of: ",value5," ",typeof value5,"<br/>");
 document.write("<br/>");
 document.write("Checking Array by isArray method: ",Array.isArray(value5),"<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>26.Accessing Arrays items </b> <br/>");
 document.write("<br/>");
 let value6 = ['a','b','c'];
 document.write(value6[0],"<br/>");
 document.write(value6[1],"<br/>");
 document.write(value6[2],"<br/>");
 document.write("<br/>");
 const value7 = ['a','b','c'];
 value7[0]='Number';
 document.write("Changing the value: ",value7[0],"<br/>");
 document.write(value7[1],"<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>27.Manipulating Arrays </b> <br/>");
 document.write("<br/>");
 const value8 = ['a','b','c'];
 document.write("The orginal Element: ",value8,"<br/>");
 value8.push('d');
 document.write("Adding Elements at the end of the Array: ",value8,"<br/>");
 document.write("<br/>");
 const value9 = ['a','b','c'];
 document.write("The orginal Element: ",value9,"<br/>");
 const last = value9.pop();
 document.write("Deleting the lats Element: ",last,"<br/>");
 document.write("After Deleting: ",value9,"<br/>");
 document.write("<br/>");
 const value10 = ['a','b','c'];
 document.write("The orginal Element: ",value10,"<br/>");
 const first2= value10.shift();
 document.write("Deleting the first Element: ",first2,"<br/>");
 document.write("After Deleting: ",value10,"<br/>");
 document.write("<br/>");
 const value11 = ['b','c','d'];
 document.write("The orginal Elements: ",value11,"<br/>");
 value11.unshift('a');
 document.write("Adding Elements at the beging of the Array: ",value11,"<br/>");
 document.write("<br/>");
 const value12 = ['a','b','c'];
 document.write("The orginal Element: ",value12,"<br/>");
 const newValues = value12.slice(1,2);
 document.write("Slicing the Element: ",newValues,"<br/>");
 document.write("<br/>");
 const value13 = ['a','b','c','d','e'];
 const newValues2 = value13.slice();
 document.write("When we are not passing any argument in slice it copy all the Element: ",newValues2,"<br/>");
 document.write("<br/>");
 const value14 = ['a','b','c','d','e','f'];
 document.write("The orginal Element: ",value14,"<br/>");
 value14.splice(2,2);
 document.write("Splicing for deleting the indexed Element: ",value14,"<br/>"); 
 document.write("<br/>");
 const value15 = ['a','b','c','d','e'];
 document.write("The orginal Element: ",value15,"<br/>");
 value15.splice(2,0,'Hello');
 document.write("Splicing the element with out deleting: ",value15,"<br/>");
 document.write("<br/>");
 const value16 = ['a','b','c','d','e'];
 document.write("The orignal Element: ",value16,"<br/>");
 value16.splice(2,1,"Hello");
 document.write("Splicing the element with deleting: ",value16,"<br/>");
 document.write("<br/>");