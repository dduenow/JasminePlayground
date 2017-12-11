/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


describe("Example Of jasmine Spy using spyOn()", function() { 
  
   it('uses the dictionary to say "hello world"', function() { 
      var dictionary = new Dictionary; 
      var person = new Person; 
		
      spyOn(dictionary, "hello");  // replace hello function with a spy 
      spyOn(dictionary, "world");  // replace world function with another spy 
		
      person.sayHelloWorld(dictionary);
      expect(dictionary.hello).toHaveBeenCalled();  
      // not possible without first spy 
  
      expect(dictionary.world).toHaveBeenCalled();  
      // not possible withoutsecond spy 
   }); 
   
   it("can have a spy function", function() { 
      var person = new Person(); 
      person.getName11 = jasmine.createSpy("Name spy"); 
      person.getName11(); 
      expect(person.getName11).toHaveBeenCalled(); 
   });    

});