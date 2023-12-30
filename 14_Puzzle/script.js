/* 
    <div class="wrapper">
        <h1 class="head">Drag and Drop Puzzle</h1>
        <div class="container">
            <div class="boxes">
                <div class="box"><div id="image1" draggable="true"></div></div>
                <div class="box"><div id="image2" draggable="true"></div></div>
                <div class="box"><div id="image3" draggable="true"></div></div>
                <div class="box"><div id="image4" draggable="true"></div></div>
                <div class="box"><div id="image5" draggable="true"></div></div>
                <div class="box"><div id="image6" draggable="true"></div></div>
                <div class="box"><div id="image7" draggable="true"></div></div>
                <div class="box"><div id="image8" draggable="true"></div></div>
                <div class="box"><div id="image9" draggable="true"></div></div>
            </div>
        </div>
    </div>
 */

const boxes=document.querySelectorAll(".boxes")

boxes.forEach((box)=>{
    box.addEventListener("dragover",()=>{
        // box.preventDefault();
        console.log("Dragging")
        var i = box.style.background-image;
        if(i.url("./Imagess/image_part_001.jpg")){
            console.log("11")
        }
    })
})
