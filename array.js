//array - collection of hcterogeneos(different) datatypes;
//array - non primitive datatype;

let arr = [1,2,3,4,5,"hello"]; //type - object;
let arr2 = ["this is array class"];
let arr3 = [12,85,4,1,2,function(){ console.log("function called")}];
let arr4 = [null,undefined,4,56,5>2];


console.log(typeof(arr)); 
console.log(arr[5][4]);
console.log(arr2[0][5]);

arr3[5]();
console.log(arr4[4]);

console.log(typeof(arr4));

for(let i = 0; i < arr; i++ ){
    console.log(i);
    console.log(arr[i]);
}

for(let i in arr){
    //index of array element;
    console.log(i);
}

for(let i of arr){
    //element of array;
    console.log(i);
}

 