/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var currentVal =0;
var throwMeAnError = function() {   
   throw new Error(); 
}; 

var addAny = function(){ 
   
   var sum = this.currentVal; 
	
   for (var i = 0; i < arguments.length; i++){ 
      sum += arguments[i]; 
   } 
	
   this.currentVal = sum;  
   return this.currentVal; 
} 

beforeEach(function(){ 
   currentVal = 5; 
});  

describe("Different Methods of Expect Block",function (){  

   it("The  Example of toContain() method",function (){ 
      expect([1,2, 3, 4]).toContain(3);
   }); 

   it("Example of toBeCloseTo()", function (){ 
      expect(12.34).toBeCloseTo(12.3, 1);    
   }); 

   it("Example of toMatch()", function (){ 
      expect("Jasmine tutorial in tutorials.com").toMatch(/com/);   
   });  
   
   it("Example of  toBeDefined", function (){
      expect(currentVal).toBeDefined();
   });
   
   it("Example of toBeUndefine()", function (){ 
      var undefineValue; 
      expect(undefineValue).toBeUndefined(); 
   });   

   it("Example oftoBeUndefine() Failed", function (){ 
      var undefineValue = 0;
      expect(undefineValue).toBeUndefined();
   }); 
   
   var value = null; 
	
   it("Example of toBeNull()", function (){ 
      expect(value).toBeNull();
   }); 
   
   var exp = 8;  
	
   it("Example of  toBeGreaterThan()", function (){
      expect(exp).toBeGreaterThan(5);
   }); 
   
   var exp = 4;  
	
   it ("Example of toBeGreaterThan() Failed", function (){
      expect(exp).toBeGreaterThan(5); 
   }); 
   
   var exp = 4;  
	
   it("Example of toBeLessThan()", function(){ 
      expect(exp).toBeLessThan(5);    
   });
   
   it("Example of toBeNaN()", function (){ 
      expect(0 / 0).toBeNaN(); 
   });   
   
   it ("Hey this will throw an Error ", function() { 
      expect(throwMeAnError).toThrow(); 
   });  
   
   it("Example of any()", function(){ 
      expect(addAny(9,9)).toEqual(jasmine.any(Number)); 
   });    
   
   it("after each function ", function(){
      expect(currentVal).toEqual(5);     
   });    
}); 
