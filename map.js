let myArray = ['nayeem', 'zioun', 'tishat', 'rafi', 'rohan'];
let empArray = [];

myArray.forEach(showData);

function showData(x){
    empArray.push(x);
};

console.log(empArray);