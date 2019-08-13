/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: GLobal scope in the inspector the value of this will be in the window
* 2. Implicit binding: if a function is called by dot notation, the object left of the dot gets 'this'.
* 3. New Binding: Object creator in a constructor function. 
* 4. Explicit Binding: whenever you use .call, .apply, or .bind you're overriding what the this keyword points to. or it is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayName (name) {
      console.log(this);
      return name;
}
// Global because sayName will work anywhere outside of the above function. To find must open 'Window' in the console.
sayName ("Leonardo");
//=========================================================================================================================
// Principle 2
// code example for Implicit Binding
const myObj = {
      greeting: 'Sup Dude,',
      saysHello: function (name) {
            console.log (`${this.greeting} my name is ${name}!`);
            // console.log (this);
      }
}// Implicit the function is 'name' the object to the left of the dot notation will get 'this'
myObj.saysHello('Michaelangelo');
//========================================================================================================================================
// Principle 3
// code example for New Binding
function coolDude(bro){
      this.greeting = 'Sup, ';
      this.bro = bro;
      this.speak = function () {
            console.log (this.greeting + this.bro);
            // console.log(this);
      };
}

const raphael = new coolDude ('Donny!');
const donatello = new coolDude('Raph!')
// New Cool Dudes are Donny and Raph, and the callback is Bro. 
raphael.speak ();
donatello.speak ();
// ================================================================================================================================
// Principle 4
// code example for Explicit Binding

//.call and .apply changed what is being said by each cool dude.
raphael.speak.call (donatello);
donatello.speak.apply (raphael);
//========================================================================================================================================================