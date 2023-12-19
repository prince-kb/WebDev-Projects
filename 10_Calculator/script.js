const b=document.getElementsByClassName("b");
const btns=document.querySelectorAll(".b");
const a=Array.from(btns);

let brac=0;
let str="";
let l=15;
let result="";

let dis=function(){
    if(str.length>=15){
        str=str.slice(0,-1);
    alert("Maximum Characters reached");
    }
    display.innerText=str;
}
//Process 1
let x=0;
const clr=document.getElementById("clr");
clr.addEventListener("click",function(){
        if(display.innerText=="INVALID"){
            dis();
        }
        else {
        str=str.slice(0,-1);
        dis();
        }
})
a.map((e)=>{
    e.addEventListener("click",function(){
            let text=e.innerText;
            switch(text){
                case 'C':
                    str="";
                    dis();
                    break;
                    case 'x':
                        str+='*';
                        dis();
                    break;
                case '=':
                    try{
                        x=eval(str);
                       x=x.toFixed(5);
                        str=x.toString();
                        // console.log(str.length);
                        dis();
                    }
                    catch(error){
                        display.innerText="INVALID";
                    }
                    break;
                default:
                    str+=text;
                    dis();
                
        }

    })

});

//Process 2
/* 

const screen=document.getElementById("screen")
const display=document.getElementById("display")
const clr=document.getElementById("clr")

const clear=document.getElementById("clear")
const bracket=document.getElementById("bracket")
const percentage=document.getElementById("percentage")
const divide=document.getElementById("divide")
const seven=document.getElementById("seven")
const eight=document.getElementById("eight")
const nine=document.getElementById("nine")
const multiply=document.getElementById("multiply")
const four=document.getElementById("four")
const five=document.getElementById("five")
const six=document.getElementById("six")
const subtract=document.getElementById("subtract")
const one=document.getElementById("one")
const two=document.getElementById("two")
const three=document.getElementById("three")
const add=document.getElementById("add")
const power=document.getElementById("power")
const zero=document.getElementById("zero")
const decimal=document.getElementById("decimal")
const equal=document.getElementById("equal")
clr.addEventListener("click",function(){
    if(str==result)
    str="";
    else if(str=="INVALID")
        str="";
    else {str=str.slice(0,-1);}
    dis();
})
clear.addEventListener("click",function(){
    str="";
    dis();
})

bracket.addEventListener("click",function(){
if(str.length<=l){
        if(brac==0){
    // screen.innertext="(";
    str+="(";
    brac++;
    bracket.innerText=")";
}
else if(brac==1){
    str+=")";
    // screen.innertext+=")";
    bracket.innerText="(";
        brac=0;
    }
    dis();
}})

percentage.addEventListener("click",function(){
    if(str.length<=l){
        str+="%";
    }
    dis();
})
divide.addEventListener("click",function(){
    if(str.length<=l){
        str+="/";
    }
    dis();
})
seven.addEventListener("click",function(){
    if(str.length<=l){
        str+="7";
    }
    dis();
})
eight.addEventListener("click",function(){
    if(str.length<=l){
        str+="8";
    }
    dis();
})
nine.addEventListener("click",function(){
    if(str.length<=l){
        str+="9";
    }
    dis();
})
multiply.addEventListener("click",function(){
    if(str.length<=l){
        str+="*";
    }
    dis();
})
four.addEventListener("click",function(){
    if(str.length<=l){
        str+="4";
    }
    dis();
})
five.addEventListener("click",function(){
    if(str.length<=l){
        str+="5";
    }
    dis();
})
six.addEventListener("click",function(){
    if(str.length<=l){
        str+="6";
    }
    dis();
})
subtract.addEventListener("click",function(){
    if(str.length<=l){
        str+="-";
    }
    dis();
})
one.addEventListener("click",function(){
    if(str.length<=l){
        str+="1";
    }
    dis();
})
two.addEventListener("click",function(){
    if(str.length<=l){
        str+="2";
    }
    dis();
})
three.addEventListener("click",function(){
    if(str.length<=l){
        str+="3";
    }
    dis();
})
add.addEventListener("click",function(){
    if(str.length<=l){
        str+="+";
    }
    dis();
})
power.addEventListener("click",function(){
    if(str.length<=l){
        str+="**";
    }
    dis();
})
zero.addEventListener("click",function(){
    if(str.length<=l){
        str+="0";
    }
    dis();
})
decimal.addEventListener("click",function(){
    if(str.length<=l){
        str+=".";
    }
    dis();
})
equal.addEventListener("click",function(){
try{
    result=eval(str);
    // console.log(str);
    str=result;
    dis();
}
catch(error){
    str="INVALID"
    dis();
}
})
 */