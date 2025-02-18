//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; //the html string made from step
}
const stepsHtml = steps.map(listTemplate);  // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join('');// set the innerHTML

//example of .map array
let grades =["A", "B", "A", "C"];
let point;
let gpaPoint = grades.map(function(grade) {
    switch (grade) {
        case "A":
            point = 4;
            break;
        case "B":
            point = 3;
            break;
        case "C":
            point = 2;
            break;
        case "D":
            point = 1;
            break;
        case "F":
            point = 0;
            break;
        default: 
            alert("not a valid grade");
    }
    return point;
})

console.log(gpaPoint);

//example of .reduce array
let totalPoint = gpaPoint.reduce(getTotal);

function getTotal(total, item){
    return total + item;
}
console.log(totalPoint);

//example of .filter array
let gpaAverage = totalPoint/gpaPoint.length;
console.log(gpaAverage);

let fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let shortFruit = fruit.filter((item)=> item.length < 6);
console.log(shortFruit)

//example of .indexOf array
const number = [12, 34, 21, 54];
const luckyNumber = 21;

let luckyIndex = number.indexOf(luckyNumber)
console.log(luckyIndex)