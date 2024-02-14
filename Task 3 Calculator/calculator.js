function display(val){
    document.getElementById("a").value +=val ;
}

function solve(){
    var x=document.getElementById("a").value;
    var y=eval(x);
    let z="Ans: "+y
    document.getElementById("a").value=z;
}

function clear(){
    document.getElementById("a").value="  ";
}

function back(){
    let string=document.getElementById("a").value;
    let string1=string.substring(0,string.length-1);
    document.getElementById("a").value=string1;
}

let one=document.getElementById("1")
one.addEventListener("click", ()=>{ display(1)});

let two=document.getElementById("2")
two.addEventListener("click", ()=>{ display(2)});

let three=document.getElementById("3")
three.addEventListener("click", ()=>{ display(3)});

let four=document.getElementById("4")
four.addEventListener("click", ()=>{ display(4)});

let five=document.getElementById("5")
five.addEventListener("click", ()=>{ display(5)});

let six=document.getElementById("6")
six.addEventListener("click", ()=>{ display(6)});

let seven=document.getElementById("7")
seven.addEventListener("click", ()=>{ display(7)});

let eight=document.getElementById("8")
eight.addEventListener("click", ()=>{ display(8)});

let nine=document.getElementById("9")
nine.addEventListener("click", ()=>{ display(9)});

let zero=document.getElementById("0")
zero.addEventListener("click", ()=>{ display(0)});

let dblzero=document.getElementById("00")
dblzero.addEventListener("click", ()=>{ display('00')});

let mod=document.getElementById("mod")
mod.addEventListener("click", ()=>{ display('%')});

let div=document.getElementById("div")
div.addEventListener("click", ()=>{ display('/')});

let mul=document.getElementById("mul")
mul.addEventListener("click", ()=>{ display('*')});

let sub=document.getElementById("sub")
sub.addEventListener("click", ()=>{ display('-')});

let sum=document.getElementById("sum")
sum.addEventListener("click", ()=>{ display('+')});

let dot=document.getElementById("dot")
dot.addEventListener("click", ()=>{ display('.')});

let equ=document.getElementById("equ")
equ.addEventListener("click", ()=>{ solve() });

let clr=document.getElementById("clr")
clr.addEventListener("click", ()=>{ back() });

let allclr=document.getElementById("allclr")
allclr.addEventListener("click", ()=>{ clear() });