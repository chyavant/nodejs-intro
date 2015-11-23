console.log('this line is the first')
function evaluate(process)
{
console.log(process.arv[1]);
var sum = 0;
for (var i = 2; i< process.argv.length; i++){
sum = sum + process.argv[i].parseInt();
}
console.log(sum);}

