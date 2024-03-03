const canvas_01 = document.getElementById("canvas") as HTMLCanvasElement; // Forma 1
const canvas_02 = <HTMLCanvasElement>document.getElementById("canvas"); // Forma 2
const canvas_03 = document.getElementById("canvas");
const context2D = (canvas_03 as HTMLCanvasElement).getContext("2d"); // Forma 3