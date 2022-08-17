var word = "hello world";
var integer1 = 10;
var integer2 = 20;

function add(int1, int2) {
    return (int1 + int2);
}

console.log(add(integer1, integer2));
var sum = String(add(integer1, integer2));
document.getElementById("typescript").innerHTML = sum;
