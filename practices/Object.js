console.log("  1");
const person = {
	name: 'Tomiwa',
	age: 24,
	sex: 'male',
	complexion: 'caramel',
	stateOfOrigin: 'Ogun',
	country: 'nigeria'
	}
console.log(person);


console.log("  2");
const car = {
	make: "Toyoto",
	model: "Camry",
	year: "2021"
	}
function cars(car){
	car.cars = "make: " + car.make + ", " + "model: " + car.model + ", " + " year: " + car.year;
	return car;
}
console.log(cars(car));


console.log("  3");
const laptop = {
	brand: 'Dell',
	price: 1200
	}

laptop.colour = "Blue"
console.log(laptop)



console.log("  4");
const phone = {
	brand: "Apple",
	price: 999
}
phone.price = 1500
console.log(phone);



console.log("  5");
const person1 = {
	firstName: 'Tomiwa',
	lastName: 'Christianah'

}
function fullName(person1){
	person1.fullName = person1.firstName + " " + person1.lastName;
	return person1;
}
console.log(fullName(person1));


console.log("   6");
const person2 = {
	firstName: "Tomiwa",
	lastName: "Christianah",
	age: 24
	}
function details(person2){
	person2.details ="firstName: " + person2.firstName + ", "+ "lastName: "  + person2.lastName + ", " +"age: "+ " " + person2.age;
	return person2;
}
console.log(details(person2));


console.log("  7");
const book = {
	title: "The Great Gatbsy",
	author: "F.Scott Fitzgerald",
	yearPublished: 1925
	};

const{title ,author} = book;
console.log(title +" " + "by" + " " +author);

console.log("  8");
const profile = {
	name: "Sam",
	age: 40,
	profession: "Engineer"
}
const{name, age} = profile;
console.log("name: " + name + " " + "age: " + age);

	
