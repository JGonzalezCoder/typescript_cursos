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
	//Otros metodos
	print(): string {
		return `${this.day}/${this.month}/${this.year}`;
	}
	
	add(amount : number, type : 'day' | 'month' | 'year') {
		if(type === 'day') {
			this.day += amount;
		}
		if(type === 'month') {
			this.month += amount;
		}
		if(type === 'year') {
			this.year += amount;
		}
	}
}

const myDate = new MyDate(2024, 3, 29);
console.log(myDate.print());
myDate.add(1, 'year');
console.log(myDate.print());
myDate.add(3, 'month');
console.log(myDate.print());
