function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name) {
    Animal.call(this, name); 
}

Dog.prototype = Object.create(Animal.prototype); 
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};

function Cat(name) {
    Animal.call(this, name); 
}

Cat.prototype = Object.create(Animal.prototype); 
Cat.prototype.constructor = Cat;

Cat.prototype.speak = function() {
    console.log(`${this.name} meows.`);
};

const myDog = new Dog('Rex');
const myCat = new Cat('Whiskers');

myDog.speak(); 
myCat.speak(); 