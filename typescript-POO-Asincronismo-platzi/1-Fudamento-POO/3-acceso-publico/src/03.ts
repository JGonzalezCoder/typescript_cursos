class MyDate {
	// atributos
	public year : number;
	public month : number;
	public day : number;
	// constructor
	constructor(year : number, month : number, day : number) {
		this.year = year;
		this.month = month;
		this.day = day;
	}
	//Otros metodos
	public print(): string {
		return `${this.day}/${this.month}/${this.year}`;
	}
	
	public add(amount : number, type : 'day' | 'month' | 'year') {
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
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
