let person = {
  firstName: "Jon",
  lastName: "Snow",
  age: 35,
  likes: ["making jokes", "can i be any more weird", "basketball"],
};
// console.log(person.firstName);
// console.log(person["lastName"]);
// console.log(person["likes"][1]);

let meal = {
  appetizer: "chips and salse",
  entree: "chile relleno",
  dessert: "churros",
  drink: "horchata",
};
let { dessert } = meal;
// console.log(dessert);
let { appetizer, entree } = meal;
// console.log(appetizer, entree);

let { drink: myDrink } = meal;
// console.log(myDrink);

for (item in person) {
  //    console.log(item)
}

for (item in person) {
  // console.log(person[item])
}

//add
person.job = "unemployed";

person["pets"] = ["dog", "cats"];

// console.log(person)

class Dog {
  constructor(name, breed, age) {
    (this.name = name), (this.breed = breed), (this.age = age);
  }
  greeting(name) {
    console.log(
      `${this.name} says hello! I am ${this.age} years old and a ${this.breed}`
    );
  }
}

let lassie = new Dog("lassie", "collie", 7);
console.log(lassie);
let beethoven = new Dog("Beethoven", "st. Benard", 2);

lassie.greeting();
beethoven.greeting();

for (key in lassie) {
  console.log(lassie[key]);
}

class Puppy extends Dog {
  constructor(name, breed, age, trainingLevel) {
    super(name, breed, age);
    this.trainingLevel = trainingLevel;
  }
}

let scrappyDoo = new Puppy("scrappy", "great-dane", 1, 5);
console.log(scrappyDoo);
