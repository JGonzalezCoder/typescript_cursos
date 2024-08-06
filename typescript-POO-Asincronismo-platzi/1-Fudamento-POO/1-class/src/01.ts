class MyDate {
	// atributos
	year : number;
	month : number;
	day : number;
	// constructor
	constructor(year : number, month : number, day : number) {
		this.year = year;
		this.month = month;
		this.day = day;
	}
}

const myDate = new MyDate(2024, 3, 29);
console.log(myDate);
