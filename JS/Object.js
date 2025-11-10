let object = {
    name: 'Vedant',
    age: 21,
    hobbies:['Watching Movies','Travelling'],
    school: {
        GRADUATION: 'SARAF',
        XII: 'PATKAR',
        X: 'A.B.GOREGAONKAR',
    },
};

// console.log(object.name);
// console.log(object.age);
// console.log(object.hobbies);
// console.log(object.school);

console.log(object.hobbies[1]);
console.log(object.school.X);
console.log(object.school.XII);

// for (let key in object){
//     console.log(object[key]);
// }

let arr = ['Watching Movies','Travelling'];

for (let index of arr){
    console.log(index);
}

// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }