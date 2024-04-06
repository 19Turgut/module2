function reverseArrey(){
let massiv=['cavid','rufo','huseyn','ferid']
massiv.reverse()
console.log(massiv)
}
reverseArrey()

// task 2

const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];
function greetAliens () {
  for (let i=0;i<aliens.length;i++){
    console.log(' "Oh powerful'+' '+ aliens[i]+' '+'we humans offer our unconditional surrender!');
  }
}
greetAliens();
 
//task3

const coolStuff = [
  'gameboys',
  'skateboards',
  'backwards hats',
  'my room',
  'temporary tattoos',
];

const myStuff = [
  'sweaters',
  'skateboards',
  'family-night',
  'my room',
];

function justCoolStuff(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

console.log(justCoolStuff(myStuff, coolStuff));


//task4

const meal = [
  { name: "arugula", source: "plant" },
  { name: "tomatoes", source: "plant" },
  { name: "lemon", source: "plant" },
  { name: "olive oil", source: "plant" },
];

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" }
];
function isTheDinnerVegan(meels) {
  for (let i = 0; i < meels.length; i++) {

    if (meels[i].source !== "plant") {
      return false;
    }
  }
  return true;
}
console.log(isTheDinnerVegan(meal)); 
console.log(isTheDinnerVegan(dinner));