//Add and remove frome begining 
var teaLine = ['abul','kalam','hasan','javed','james','john'];
console.log(teaLine);

//use shift (instead of pop) to remove frome begining
var teaLine = ['abul','kalam','hasan','javed','james','john'];
teaLine.shift();
console.log(teaLine);


// Use unshift to (instead of pop) to add in begining
var teaLine = ['abul','kalam','hasan','javed','james','john'];
teaLine.unshift('farnandez');
console.log(teaLine);


// To cut element frome array use slice
var teaLine = ['abul','kalam','hasan','javed','james','john'];
var part = teaLine.slice(2);
console.log(teaLine);