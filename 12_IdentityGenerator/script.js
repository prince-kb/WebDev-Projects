const photoUploader=document.querySelector("#photoUploader");
let profilepic=document.querySelector("#profilepic");

let name=document.querySelector("#name");

let submitButton=document.querySelectorAll(".submitButton");

let inputName=document.querySelector("#inputName");
let number=document.querySelector("#number");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let id=document.querySelector("#ID");

let place=document.querySelector(".Place");
let namePlace=document.querySelector("#namePlace");
let numberPlace=document.querySelector("#numberPlace");
let emailPlace=document.querySelector("#emailPlace");
let passwordPlace=document.querySelector("#passwordPlace");
let IDPlace=document.querySelector("#IDPlace");

let hidden=document.querySelector("#hidden");
let dl=document.querySelector("#dl");
let x=0,y=0;
// 1st method

// photoUploader.addEventListener("change",function(){
//     const reader= new FileReader();
//     reader.addEventListener("load",()=>{
//         image=reader.result;
//         imagePlace.style.backgroundImage=`url(${image})`;
//     });
//     reader.readAsDataURL(this.files[0]);
// })

//2nd method
photoUploader.onchange = function(){
    profilepic.src = URL.createObjectURL(photoUploader.files[0]);
}

function funcname(){
    namePlace.innerHTML=`<h3 id="inputName">${name.value}</h3>`;
}
function funcnumber(){
    numberPlace.innerHTML=`<p class="a">Contact no. : ${number.value}</p>`;
}
function funcemail(){
    emailPlace.innerHTML=`<p class="a">Email : ${email.value}</p>`;
}
function funcpassword(){
    passwordPlace.innerHTML=`<p class="a" id="hidden" onclick="funchidden()">Password: XXXXXX </p>`;
}
function funcID(){
    IDPlace.innerHTML=`<p class="a">Date of joining : ${id.value}</p>`;
}
function funchidden(){
    if(x==0){
        passwordPlace.innerHTML=`<p class="a" id="hidden" onclick="funchidden()" onmouseover="">Password: ${password.value} </p>`;
        x=1;
    }
    else if(x==1){
        passwordPlace.innerHTML=`<p class="a" id="hidden" onclick="funchidden()" onmouseover="">Password: XXXXXX </p>`;
        x=0;
    }}

    var r = document.querySelector(':root');

function changecolor() {
    if(y==0){
        r.style.setProperty('--b', 'white');
        r.style.setProperty('--w', 'black');
        y=1;
    }
    else if(y==1){
        r.style.setProperty('--b', 'black');
        r.style.setProperty('--w', 'white');
        y=0;
    }}