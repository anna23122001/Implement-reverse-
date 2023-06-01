'use strict'
function MyArray(...args) {
    this.length = 0;
    for(let i = 0; i< args.length; i++){
        this.push(args[i]);
    }
 }
 MyArray.prototype = new MyArrayProto();
 function MyArrayProto(){
   this.push = function(...args){
      if(args.length > 0){
          for( let i = 0; i < args.length; i++){
              this[this.length++] = args[i];
          }
      }
      return this.length;
  };
    this.reverse = function(fn){
       for(let i = 0, j = this.length - 1; i < j; i++, j--){
        [this[i], this[j]] = [this[j], this[i]];
       }
       return this
    } 
 }

const newArray = new MyArray (1, 2, 3, 4, 5);
console.log(newArray);
newArray.reverse();
console.log(newArray);