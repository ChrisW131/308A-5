let arr1 = [3,7,1,6,4,2,8,0,5,2]
// function findSum(){
// let sum = 0;
// for (let i =0; i < arr1.length; i++){
// sum += arr1[i]
// }
// console.log(sum)
// }
//export Added for script.js
export function findAvg(){
let sum = 0;
for (let i =0; i < arr1.length; i++){
(sum += arr1[i]/arr1.length)
}
console.log(sum)
}
// findSum();
findAvg();
////////////////////////////////////////
// let arr2 = ["Hello", "My name is Chris", "I like 90s movies", "Cant stop me now"]
// function findLongest(){
// return arr2.sort((a, b) => b.length - a.length)[0];
// }
// findLongest();
// console.log(findLongest(arr2))
// function stringsLongerThan(arr2, num){
// return arr2.filter(str => str.length > 6);
// }
// console.log(stringsLongerThan(arr2));
//////////////////////////////////////////////////////
// let arr = [
//     { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//     { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//     { id: "7", name: "Bilbo", occupation: "None", age: "111" }
//     ]
//     function sortByAge(){
//     arr.sort((a, b)=> parseInt(a.age) - parseInt(b.age));
//     console.log(arr);
//     }
//     sortByAge();
//     function filterOut50() {
//     let newArr = arr.filter(obj => obj.age < 50);
//     console.log(newArr);
//     }
//     filterOut50();
//     function changeToJob(){
//     arr = arr.map(obj => {
//     return {
//     ...obj,
//     occupation: "Job",
//     age: parseInt(obj.age) + 1
//     }
//     } )
//     console.log(arr)
//     }
//     changeToJob()
//     let testObj = {
//     id: "63",
//     name: "Blaine",
//     occupation: "Quiz Master",
//     age: 45
//     }
//     function incrementAge(p){
//     if(p.age == undefined){
//     p.age = 0
//     console.log(p)
//     } else{
//     p.age + 1
//     console.log(p)
//     }
//     }
//     incrementAge(testObj)
//     function copyAndIncrement(x){
//     let copyObj = {...x}
//     if(copyObj.age == undefined){
//     copyObj.age = 0
//     console.log(copyObj)
//     } else{
//     copyObj.age++;
//     console.log(copyObj)
//     }
//     }
//     copyAndIncrement(testObj)