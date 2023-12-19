document.onkeydown = function (event) {
   switch (event.keyCode) {
      case 37:
         console.log("Left key is pressed.");
         break;
      case 38:
         console.log("Up key is pressed.");
         break;
      case 39:
         console.log("Right key is pressed.");
         break;
      case 40:
         console.log("Down key is pressed.");
         break;
        }
    };

const aalu=document.getElementById("aalu");
let h=aalu.clientHeight;
let w=aalu.clientWidth;
let count=0,p=0;
console.log(h+" "+w);
let n=(w*h)/729;
// for(let i=0;i<n;i++){
//     let div=document.createElement("div");
//     div.setAttribute("id",`id_${i}`);
//     div.classList.add("block");
//     aalu.append(div);
// }
let t=setInterval(function(){

   try{
      let div=document.createElement("div");
      div.setAttribute("id",`id_${i}`);
      div.classList.add("block");
      aalu.append(div);
      count++;
}
catch(error){
   p=1;
   console.log("a");
}
if(p==1){
   clearInterval(t);
}
console.log(count);
},20)
