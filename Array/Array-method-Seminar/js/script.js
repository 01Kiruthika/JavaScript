
//1.Splice==>Add / remove / replace elements in an array  and  Changes the original array

/*Syntax
======================
array.splice(start, deleteCount, item1, item2)

*/

let weeks = ['sun','tue','thurs','sat'];
weeks.splice(1, 0,'mon'); 
console.log(weeks);

weeks.splice(2, 0 ,'fri'); 
console.log(weeks);


