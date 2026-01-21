class Car {
    constructor(n, b) {
        this.name = n;
        this.brand = b;
    }
    showDetails() {
        console.log(`${this.name} ${this.brand}`);
    }
}

let c1 = new Car('desire', 'suzuki');
console.log(c1);
console.log(c1.showDetails());

class SUV extends Car {
    constructor(x, y) {
        super(x, y);
        this.buyer = "Vedant";
    }
}

class miniSUV extends SUV {
    constructor(x, y) {
        super(x, y);
        this.type = "mini-suv";
    }
}

let car2 = new miniSUV("audi q3", "audi");
console.log(car2);

class Cars {
    #count; //private variable you cannot access out side of it.
    constructor(n, b) {
        this.name = n;
        this.brand = b;
        this.#count = 100;
    }

    showDetails() {
        console.log(`${this.name} ${this.brand} ${this.#count}`);
    }

    getCount(){
        return this.#count; //getter methods to access private fields.
    }
}

let c11 = new Cars("Thar", "Mahindra");

console.log(c11, "this is the encapsulation"); //wont show count
console.log(c11.getCount()); //now we can see the private value (100)


// abstraction

let amounts = process.argv[2];
console.log(amounts);

class BankAccount {
    #balance;
    #pin;

    constructor(accountHolder) {
        this.accountHolder = accountHolder;
        this.#balance = 0;
        this.#pin = '1234'
    }

    deposit(amount) {
        if (amount > 0) {
            this. #balance += amount;
            console.log(`Deposited ${amount}`);
        } else {
            console.log('Invalid deposite amount');
        }
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn ${amount}`);
        } else {
            console.log('Insufficient balance');
        }
    }

    checkBalance(userPin) {
        if (userPin == this.#pin) {
            return `Current balance: ${this.#balance}`
        } else {
            console.log(`Invalid Pin ${userPin}`);
        }
    }
}

const account = new BankAccount('Vedant');

account.deposit(amounts);
account.withdraw(400);
let checkBal = account.checkBalance(1234);
console.log(checkBal);


//Pollymorphism

class Vehicle {
    run() {
        console.log('Vehicle is running')
    }
}

class car1 {
    run() {
        console.log('Car is running')
    }
}

class Truck {
    run() {
        console.log('Truck is running')
    }
}

let v1 = new Vehicle();
let v2 = new car1();
let v3 = new Truck();


class Animal {
    speak() {
        console.log('Animal speaks');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog Barks');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat Meows');
    }
}

function makeSound(animal) {
    animal.speak();
}

let dog = new Dog();
let cat = new Cat();

makeSound(dog);
makeSound(cat);
