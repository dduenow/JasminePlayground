/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe('This custom matcher example', function() {
   
   beforeEach(function() { 
      // We should add custom matched in beforeEach() function. 
      jasmine.addMatchers ({ 
         validateAge: function() { 
            return {    
               compare: function(actual,expected) {
                  var result = {}; 
                  result.pass = (actual >= 13 && actual <= 19);
                  result.message = 'sorry u are not a teen ';
                  return result; 
               }   
            };   
         }    
      });    
   }); 
    
   it('Lets see whether u are teen or not', function() { 
      var myAge = 14; 
      expect(myAge).validateAge();         
   });   
    
   it('Lets see whether u are teen or not ', function() { 
      var yourAge = 18;
      expect(yourAge).validateAge();  
   }); 

});
