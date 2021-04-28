var fetch=require('node-fetch')
// async function
async function fetchAsync() {
// await response of fetch call
let response = await
fetch('https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json');
// only proceed once promise is resolved
let data = await response.json();
// only proceed once second promise is resolved
return data;
}
// trigger async function
// console.log(); response or catch error of fetch promise
function findMaxSalary(data) {
  // data.data[0] is the entry for (var i = 0; i < array.length; i++) {
    array[i]
  } the first person in the database.
