const wrapper=document.querySelector("#wrapper");
const add=document.querySelector("#add");
const note1=document.querySelector("#note1");
const edit=document.getElementsByClassName("edit");
const del=document.getElementsByClassName("del");
// const a=document.querySelector("#a")
// wrapper.addEventListener("click",function(){
//     if(wrapper.style.background=="black"){
//         wrapper.style.background="white";
//     }
//     else wrapper.style.background="black";
// })
let n=0,i=1;
// wrapper.addEventListener("click",()=>{
//     if(wrapper.style.background=="white"){
//         wrapper.style.background="black";
//     }
//     else wrapper.style.background="white";
// })
add.addEventListener("click",function(){
    if(n==0){
        n=1;
        note1.style.visibility="visible";
    }
    else {
        n+=1;i+=1;
        // let node=document.createElement("div");
        wrapper.innerHTML+=`<div id="note${i}" class="note">
        <button id="edit${i}" class="edit">EDIT</button>
        NOTE ${i}
        <button id="del${i}" class="del">X</button>
        <input type="text" name="Note ${i}" id="n${i}" class="n">
    </div>`

    }
})

let idd=a=>{
    console.log(a.target.id);
}
// del.addEventListener("click",idd);