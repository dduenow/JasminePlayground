/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Person = function() {}; 

Person.prototype.sayHelloWorld = function(dict){ 
   return dict.hello() + " " + dict.world(); 
}; 
    
var Dictionary = function() {}; 

Dictionary.prototype.hello = function() { 
   return "hello"; 
}; 
    
Dictionary.prototype.world = function() { 
   return "world"; 
}; 
