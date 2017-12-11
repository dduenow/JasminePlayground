/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe("nested",function(){ 
   
   // Starting of first suite block  
   // First block    
	
   describe("Retaining values ",function (){
   
      //test case:1    
      it ("Should retain the current value of all time", function () { 
         expect(nested.currentVal).toBeDefined();   
         expect(nested.currentVal).toEqual(0);   
      });    
   }); //end of the suite block   

   //second suite block 
   describe("Adding single number ",function (){     
   
      //test case:2 
      it("should add numbers",function(){ 
         expect(nested.add(5)).toEqual(5); 
         expect(nested.add(5)).toEqual(10); 
      });         
   }); //end of the suite block  

   //third suite block 
   describe("Adding Different Numbers",function (){  
   
      //test case:3 
      it("Should add any number of numbers",function() {  
         expect(nested.addAny(1,2,3)).toEqual(6);  
      });    
   }); //end of the suite block 

});
