let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

if(typeof unknowVar === "string") {
	unknowVar.toUpperCase();
}

const parse = (str: string): unknowVar => {
	return JSON.parse(str);
}

if(typeof unknowVar === "boolean") {
	let booleanVar: boolean = unknowVar;
}
