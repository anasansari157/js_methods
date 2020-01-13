// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
for (let key in object) {
  console.log(`${key} . ${object[key]}`);
}


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
 name : "David Rayy", 
 sclass : "VI", 
 rollno : 12
};
delete student.rollno;
console.log(student);



// 3. Write a function to get the length of an object.
function objectLength(object) {
 var count = 0;
 for (let key in object)
   count++;
 return count;
}