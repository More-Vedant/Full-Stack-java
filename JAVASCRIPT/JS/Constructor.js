// let Person6 = {
//     name: 'suresh',
// };

// let Person7 = {
//     name: 'ramesh',
// };

// function myFunctions3(age, city) {
//     this.age = age;
//     this.city = city;
// }

// let myBind = myFunctions3.bind(Person7, 24, 'pune');

// myBind();


let person = {
    name: "vedant"
};

class PersonDetails {
    setDetails(age, city) {
        ((this.age = age), (this.city = city));
    }
}

let obj = new PersonDetails();

let myBind = obj.setDetails.bind(person, 24, 'pune');
console.log(myBind());