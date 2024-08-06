class MyDate {
	// atributos
	private year : number;
	private month : number;
	private day : number;
	// constructor
	constructor(year : number, month : number, day : number) {
		this.year = year;
		this.month = month;
		this.day = day;
	}
	//Otros metodos
	
	private addPadding(value : number): string {
		if (value < 10) {
			return `0${value}`;
		}
		return `${value}`;
	}
	
	public print(): string {
		return `${this.addPadding(this.day)}/${this.addPadding(this.month)}/${this.year}`;
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

const myDate = new MyDate(2024, 3, 9);
console.log(myDate.print());
