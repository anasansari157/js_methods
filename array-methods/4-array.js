var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year


function sumDogAge(data) {
	let sum=0;

	for (let i = 0; i<data.length; i++) {
		if(data[i].type == "dog")
			sum += data[i].age;	 
	}
	return sum*7;

}
console.log(sumDogAge(data));

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.
console.log(data.map((v, i) => data[i].age = data[i].age * 7)
.filter((v, i)=> data[i].type == "dog" )
.reduce((sum,v) => sum += v,0)
);

// Solution 105