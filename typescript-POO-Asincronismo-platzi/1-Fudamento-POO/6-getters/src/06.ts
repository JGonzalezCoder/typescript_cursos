class MyDate {
	// atributos y constructor
	constructor(
		private _year : number = 1999, 
		private _month : number = 10, 
		private _day : number = 7
	) {}
	// set/get
	get day() {
		return this._day;
	}
	get month() {
		return this._month;
	}
	get year() {
		return this._year;
	}
	get isLeapYear() : boolean {
		if(this.year % 400 === 0) return true;
		if(this.year === 100) return false;
		return this.year % 4 === 0;
	}
	//Otros metodos	
	private addPadding(value : number): string {
		if (value < 10) {
			return `0${value}`;
		}
		return `${value}`;
	}
	
	public print(): string {
		return `${this.addPadding(this.day)}/${this.month}/${this.year}`;
	}
	
	public add(amount : number, type : 'day' | 'month' | 'year') {
		if(type === 'day') {
			this._day += amount;
		}
		if(type === 'month') {
			this._month += amount;
		}
		if(type === 'year') {
			this._year += amount;
		}
	}
}

const myDate = new MyDate(2024, 3, 9);
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
console.log(myDate.isLeapYear);
