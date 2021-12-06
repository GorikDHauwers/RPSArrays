var arr = ["start", "mijn", "array"];
var plusVoor = document.getElementById("plusVoor");
var minVoor = document.getElementById("minVoor");
var plusAchter = document.getElementById("plusAchter");
var minAchter = document.getElementById("minAchter");
var msg = document.getElementById("msg");
var voegToe = document.getElementById("voegToe");
var reverse = document.getElementById("reverse");
var sorteer = document.getElementById("sorteer")
setMessage();

plusVoor.addEventListener("click", function () {
   let temp = readInput()
   console.log(temp);
   if (temp == "") { temp = "aaa" }
   arr.unshift(temp);
   setMessage();
});
minVoor.addEventListener("click", function () {
   arr.shift();
   setMessage();
});
plusAchter.addEventListener("click", function () {
   let temp = readInput()
   console.log(temp);
   if (temp == "") { temp = "zzz" }
   arr.push(temp);
   setMessage();
});
minAchter.addEventListener("click", function () {
   arr.pop();
   setMessage();
});
reverse.addEventListener("click", function () {
   arr.reverse();
   setMessage();
})
sorteer.addEventListener("click", function () {
   arr.sort();
   setMessage();
})

function setMessage() {
   msg.innerHTML = "<p>de array is " + arr + "</p> <p> lengte array: " + arr.length + "</p>";
};
function readInput() {
   return voegToe.value;
};

