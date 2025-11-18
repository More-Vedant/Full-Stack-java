// let arr = [1,2,3,4];

// Array.prototype.ढकल = function (value) {
//     console.log("arr", arr);
//     let index = this.length;
//     this[index] = value;
//     return arr;
// };

// let ans = arr.ढकल(5);
// console.log("ans", ans);


let arr = [1,2,3,4];

Array.prototype.ढकल = function (...value) {
    let index = this.length;
    console.log(index);

    for(let i=0;i<value.length;i++){
        this[index+i] = value[i];
    }
    return arr;
};

let ans = arr.ढकल(5,6,7);
console.log("ans",ans);