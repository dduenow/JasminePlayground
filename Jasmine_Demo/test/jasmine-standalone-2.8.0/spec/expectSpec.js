/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


describe("Different Methods of Expect Block",function (){ 
   
   it("The Example of toEqual() method",function (){   
      //this will check whether the value of the variable  
      // currentVal is equal to 0 or not.  
      expect(expectexam.currentVal).toEqual(0);  
   }); 
   
   it("The Example of toBe() method",function (){ 
      expect(expectexam.name).toBe(expectexam.name1);     
   });   
   
   it("The Example of not.toBe() method",function (){ 
      expect(true).not.toBe(false);    
   });   

   it("The Example of toBeTruthy() method",function (){   
      expect(expectexam.exampleoftrueFalse(5)).toBeTruthy();    
   }); 
   
   it("The Example of toBeFalsy() method",function (){
      expect(expectexam.exampleoffalseTrue(15)).toBeFalsy();   
   }); 

});