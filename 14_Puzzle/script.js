/* 
    <div class="wrapper">
        <h1 class="head">Drag and Drop Puzzle</h1>
        <div class="container">
            <div class="boxes">
                <div class="box"><div id="image1" class="image" draggable="true"></div></div>
                <div class="box"><div id="image2" class="image" draggable="true"></div></div>
                <div class="box"><div id="image3" class="image" draggable="true"></div></div>
                <div class="box"><div id="image4" class="image" draggable="true"></div></div>
                <div class="box"><div id="image5" class="image" draggable="true"></div></div>
                <div class="box"><div id="image6" class="image" draggable="true"></div></div>
                <div class="box"><div id="image7" class="image" draggable="true"></div></div>
                <div class="box"><div id="image8" class="image" draggable="true"></div></div>
                <div class="box"><div id="image9" class="image" draggable="true"></div></div>
            </div>
        </div>
    </div>
 */

const boxes=document.querySelectorAll(".boxes")
const image1 = document.querySelector("#image1")
const image2 = document.querySelector("#image2")

// boxes.forEach((box)=>{
//     box.addEventListener("dragover",()=>{
//         // box.preventDefault();
//         console.log("Dragging")
//         var i = box.style.background-image;
//         if(i.url("./Imagess/image_part_001.jpg")){
//             console.log("11")
//         }
//     })
// })

image1.addEventListener("click",()=>{
    console.log("Hii")
    console.log(image1.style.backgroundImage);
    if(image1.style.backgroundImage!="url(image_part_001.jpg)"){
        console.log("Hii2")
        // image2.style.border="30px dashed black"
        image2.style.backgroundImage="url(./Imagess/image_part_009.jpg)";
    }
    else {console.log("No hii")}
})