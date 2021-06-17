const arr = [1, 2, 3, 4, 5];
let sum = 0;

for(let i = 0; i <= arr.length - 1; i++){

    sum += arr[i];


}
console.log(sum);

let sumDegree = 0;
for(let i = 0; i <= arr.length - 1; i++){

    sumDegree+= arr[i] ** 2;


}
console.log(sumDegree);