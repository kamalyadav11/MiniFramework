// var Tony = {
//   firstname: "Kamal",
//   lastname: "Yadav",
//   address: {
//     street: "10ny",
//     city: "Delhi"
//   }
// }
//
// function greet(person) {
//   console.log(person.firstname + " You Rock");
// }
//
// console.log(Tony.address.city);
// //greet(Tony);
//
// greet({
//   firstname: "Mukul",
//   lastname: "Yadav"
// });

// var english = {
//   greet: "hello"
// };
//
// var Spanish = {
//   greet: "hola"
// };
//
// console.log(Spanish.greet);

///****** JSON vs Object literal*****///

// var objectLiteral = {
//   name: "Kamal",
//   isAprogrammer: true
// }
//
// console.log(JSON.stringify(objectLiteral));
//
// var JSONthing = '{  "name": "Kamal",  "isAprogrammer": true }'
//
// console.log(JSON.parse(JSONthing));

///***** Functions are Objects *****///

// function greet() {
//   console.log("I am greeting you");
// }
// //greet();
//
// //greet.language = "english";
// console.log(greet);

////***** Function Statements and Function Expressions *****////
//The Best Concept

// function log(a) {
//   a();//////////////here a got the value i.e the whole anonymous function therefore
// }///when its get called then a will run anonymous function
//
// log(function () {
//   console.log("hi again");
// });

///***** Call by Value vs Call by Reference *****///

// var a = 3;
// var b;
// b = a;
// a = 4;
// console.log(a);
// console.log(b);

// var c = { name: "kamal" };
// var d = c;
// c.name = "Mukul";
// //c = { greeting: "hio" };
// // console.log(c);
// // console.log(d);
//
// var func = function (obj) {
//   obj.name = "hola";
// }
// func(c);
// console.log(c);
// console.log(d);

///***** Objects, Functions and this *****///

// console.log(this);
//
// var c = {
//   name: "c object",
//   log: function () {
//     var self = this;
//     self.name = "Updated c object"
//     console.log(self);
//     var setname = function(newname) {
//       self.name = newname;
//     }
//     setname("Updated again");
//     console.log(self);
//   }
// };
// c.log();

///***** Arrays *****///

// var arr = [
//   1,
//   false,
//   {
//     name: "kamal",
//     age: 21
//   },
//   function (name) {
//     console.log("Hello " + name);
//   }
// ]
//
// //console.log(arr);
// arr[3](arr[2].name);

///***** Arguements *****///
// function anything(firstname, lastname, language) {
//   language = language || "english";
//   if (arguments.length === 0) {
//     console.log("Missing Arguments");
//     return;
//   }
//
//   console.log(firstname + " " + lastname + " " + language);
//   console.log(arguments);
// }
// anything();
// anything("kamal", "Yadav");

///***** Optional *****///

// function best(){
//   return {
//     firstname: "kamal"
//   }
// }
// console.log(best());

///***** IIFEs *****///
// var greet = function(name) {
//   console.log("Hello " + name);
// }("Kamal");
// //console.log(greet());
//
// (function (name) {
//   console.log("Hello Again " + name);
// }("Kamal"));

///***** Closures *****///
//A closure is the combination of a function and the lexical environment
// within which that function was declared.
// function dothis(number) {
//   return function (x) {
//     console.log(number*x);
//   }
// }
// var anything = dothis(3);
// // anything(4);
// function abc() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       function () {
//         console.log(i);
//       }
//     )
//   }
//   return arr;
// }
// var fs = abc();
// fs[0]();
// fs[1]();
// fs[2]();

///***** Closures and Callbacks *****///
//
// function sayHiLater() {
//   setTimeout(function () {
//     console.log("Hi");
//   },2000);
// }
// sayHiLater();
//
// function doSomething(callback){
//   callback(5);
// }
//
// doSomething(function (x) {
//   console.log(x*x);
//   console.log('I am done');
// });

///***** call, apply and bind *****///

// var person = {
//   firstname: "kamal",
//   lastname: "Yadav",
//   getfullname: function () {
//     var fullname = this.firstname + " " + this.lastname;
//     return fullname;
//   }
//
// }
// var logname = function () {
//   console.log(this.getfullname());
// }.bind(person);
// // var logPerson = logname.bind(person);
// // logPerson();
// logname.call(person);
//
// var person2 = {
//   firstname: 'Mukul',
//   lastname: 'Yadav'
// }
// console.log(person.getfullname.apply(person2));//here we made this to point person2 and not person2
// //same can be done with call() and this can be called as fnction borrowing
// function multiply(a,b) {
//   return a*b;
// }
// var multiplier = multiply.bind(this, 2);
// console.log(multiplier(3));//this is called function currying

///***** Functional Programming *****///

// var arr = [1,2,3];
// console.log(arr);
// var arr2 = [];
//
// for (var i = 0; i < arr.length; i++) {
//   arr2.push(arr[i]*2);
// }
// console.log(arr2);
//
// function mapForEach(arr,fn) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++){
//     newArr.push(
//       fn(arr[i])
//     )
//   }
//   return newArr;
// }
// var arr = [1,2,3];
// console.log(arr);
//
// var arr2 = mapForEach(arr,function (item) {
//   return item*2;
// });
// console.log(arr2);
//
// var arr3 = mapForEach(arr, function (item) {
//   return item>2;
// });
// console.log(arr3);

///***** Prototypal Inheritance ***/////

// var person = {
//   firstname: 'Default',
//   lastname: 'Default',
//   getfullname: function () {
//     return this.firstname + " " + this.lastname;
//   }
// }
//
// var john = {
//   firstname: 'John',
//   lastname: 'Doe'
// }
//
// //Don't do this not good in Javascript
// john.__proto__ = person;
// //console.log(john.getfullname());
// for(var prop in john){
//   if(john.hasOwnProperty(prop))
//     console.log(prop + ":" + john[prop]);
// }

///***** Object and new keyword *****///

// function Person(firstname, lastname) {
//   console.log(this);
//   this.firstname = firstname,
//   this.lastname = lastname
// }
//
// Person.prototype.getfullname = function () {
//   return this.firstname + ' ' + this.lastname;
// }
//
// var john = new Person('john', 'Doe');
//
//
// Person.prototype.getformalfullname = function () {
//   return this.lastname + ',' + this.firstname;
// }
// console.log(john.getformalfullname());
// console.log(john.getformalfullname());
//
// String.prototype.isLengthgreaterthan = function (limit) {
//   console.log(length);//don't know length of what
//   console.log(this.length);//here this point to johny
//   return this.length > limit;
// };
// console.log("johny".isLengthgreaterthan(3));

///***** Object.Create *****///
// var person = {
//   firstname: "default",
//   lastname: 'default',
//   greet: function () {
//     return 'Hi ' + this.firstname;
//   }
// }
//
// var john = Object.create(person);//This is also called pure prototypal Inheritance
// john.firstname = "John",
// john.lastname = "Doe"
// console.log(john);

///***** My framework/Library *****///

// var a = G$('Kamal', 'Yadav');
// a.greet().setLang('es').log();
//a.greet().setLang('es').greet(true);

$('#login').click(function () { //when i click the button
    var logingrtr = G$('Kamal', 'Yadav');//i create my own object

    $("#logindiv").hide();//and hide dropdown menu
    logingrtr.setLang($('#lang').val()).HtmlGreeting("#greeting", true).log();
    //then set the laguage selected by dropdown menu and chain the method that updates the h1
});
