class MyDate {
	// atributos y constructor
	constructor(
		private _year : number = 1999, 
		private _month : number = 10, 
		private _day : number = 7
	) {}
	// set/get
	set day(day : number) {
		this._day = day;
	}
	get day() {
		return this._day;
	}
	set month(month : number) {
		if(month>=1 && month<=12) {
			this._month = month;
		} else {
			throw new Error('month out of range');
		}
	}
	get month() {
		return this._month;
	}
	set year(year : number) {
		this._year = year;
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
		return `${this.addPadding(this._day)}/${this._month}/${this._year}`;
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
myDate.month = 10
console.log(myDate.print());
myDate.month = 78
