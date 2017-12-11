/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.Calculator = { 
   
   currentVal:0,  
   varAfterEachExmaple:0, 
   
   add:function (num1){ 
      this.currentVal += num1; 
      return this.currentVal;    
   },     
   
   addAny:function (){    
      var sum = this.currentVal; 
		
      for(var i = 0; i < arguments.length; i++) { 
         sum += arguments[i]; 
      } 
      
      this.currentVal = sum; 
      return this.currentVal; 
   }, 

};

