// Create a constructor function for each of the following:
// + Scooter with `year`, `color`, and `model` properties
// + Driver with `name`, `age`, and `experience` properties
// + PickupLocation with `address` and `city` properties

class Scooter{
	constructor(year, color, model){
		this.year = year
		this.color = color
		this.model = model
	}
}

// const scooter = new Scooter(1994, "blue", "convertable")

class Driver{
	constructor(name, age, experience){
		this.name = name
		this.age = age
		this.experience = experience
	}
}

class PickupLocation{
	constructor(address, city){
		this.address = address
		this.city = city
	}
}