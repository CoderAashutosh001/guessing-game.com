document.getElementById("submit").onclick = function(){
if (document.getElementById("take").value >15 || document.getElementById("take").value <1){
    window.alert("The value should be within 1 to 15!!!");
}
else{
let a = Math.random()*15;
let b = Math.ceil(a);
let c = document.getElementById("take").value;
if (b==c){
     document.getElementById("ans").innerHTML="You guessed it correct!!!";
}
 else{
        document.getElementById("ans").innerHTML="You were wrong. The number was "+b;
}
}}
