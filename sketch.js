let firstnum = prompt("Please enter your first number: ");
console.log(firstnum);
 let secondnum = prompt("Please enter your second number: ")
 console.log(secondnum);

function largest(){
if(firstnum > secondnum){
  console.log("The number", firstnum, "is largest");
}else{
console.log("The number", secondnum, "is the largest");
}
}

function setup() {
  createCanvas(400, 400);
largest()
}

function draw() {
  background(220);
}
