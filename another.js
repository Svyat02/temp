var x = "hello world"
console.log(x)

x = 89

console.log(x)

function f (x, y) {
    console.log(x)
    console.log(y)
    return x > y;
}

console.log(f(9,0,9))

var a = 2;
{
    let a = 3;
    console.log(a);
}
console.log(a)

{
    const ARR = [5, 6];
    console.log(ARR);
    ARR.push(7);
    console.log(ARR);
    // ARR = 10;
    // console.log(ARR);
    ARR[0]=3;
    console.log(ARR)
}

function A (){
    var x = 7;
    function B(){
        console.log(x);
    }}

var x = 5;
A();

function B(){
    console.log(x);
}

var message = "in global";

var a = function () {
    var message = "inside a";
    console.log(message);
    b();
}

function b () {
    console.log("b ->  " + message)
}

a();

var message = "in global";

var a = function () {
    var message = "inside a";
    console.log(message);
    function b () {
        console.log("b ->  " + message)
    }

    b();
}

a();

x = 9
console.log(x)
var x = 6;

const a = 0
console.log(a);
var a = 8
console.log(a);

alert(3 + 1
    + 2);

const a = 2;
const b = 3;

console.log(`5 =  ${a} 
    + ${b} `)

console.log(9/3)
console.log(undefined/3)

function test1 (a){
    console.log(a/5)
}

test1()

var x = 4, y = 4;
if(x == y){
    console.log("x = 4 is equal to y = 4")
}

x = "4";

if(x == y){
    console.log("x = 4 is equal to y = 4")
}

if(x !== y){
    console.log("x = 4 is NOT equal to y = 4")
}

if ( false || null || undefined || "" || 0 || NaN){
    console.log("this line never execute")
}

else{
    console.log("everething is fine")
}

if(true && "hello" && 1 && -1 && "false") {
    console.log("All is true!")
}

function b()
{
    return
    {
        name: "Mira"
    };
}

function a(){
    return{
        name: "Mira"
    };
}

console.log(b())
console.log(a())

