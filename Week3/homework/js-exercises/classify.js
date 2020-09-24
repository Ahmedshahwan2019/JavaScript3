// Adbulkareem class

class Person {
  constructor(
    name,
    age,
    gender,
    city,
    partner,
    numOfChilderen,
    profissional,
    favoriteFood,
    hobby,
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.partner = partner;
    this.childeren = numOfChilderen;
    this.profissional = profissional;
    this.favoriteFood = favoriteFood;
    this.hobby = hobby;
  }

  getfamily() {
    return ` ${this.name} and his ${this.age} have ${this.childeren} kids`;
  }

  getAddress() {
    return `${this.name} lives in ${this.city}`;
  }

  getfavoraite() {
    return `${this.name} likes to ${this.favoriteFood} and ${this.hobby}`;
  }
}
// adel class
class Animal {
  constructor(name, age, color, food, owner) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.food = food;
    this.owner = owner;
  }
  gethorse() {
    return `${this.name} is ${this.age} years old and his color is ${this.color}`;
  }

  getfood() {
    return `${this.name} eat ${this.food}`;
  }

  getOwner() {
    return `The owner name is ${this.owner}`;
  }
}

const Adbulkareem = new Person(
  'Abdulkareem',
  '35',
  'man',
  'Riyadh',
  'wife',
  '3',
  'construction worker',
  'date',
  'water pipe',
);
console.log(Adbulkareem);

const adel = new Animal('adel', '15', 'brown', 'green grass', 'Adbulkareem');
console.log(adel);
