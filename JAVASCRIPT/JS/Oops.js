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