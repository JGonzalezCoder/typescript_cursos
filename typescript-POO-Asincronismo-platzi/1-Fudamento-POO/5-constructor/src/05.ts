class MyDate {
	// atributos y constructor
	constructor(
		private year : number = 1999, 
		private month : number = 10, 
		private day : number = 7
	) {}
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

const myDate1 = new MyDate(2024, 3, 9);
const myDate2 = new MyDate(2024, 3);
const myDate3 = new MyDate(2024);
const myDate4 = new MyDate();
console.log(myDate1.print());
console.log(myDate2.print());
console.log(myDate3.print());
console.log(myDate4.print());
