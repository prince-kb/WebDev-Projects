
const boxes=document.getElementsByClassName("box"),
    image=document.getElementsByClassName("image")
console.log(boxes,image);

boxes.forEach(b=>{
    b.addEventListener("dragover",e => {
        e.preventDefault();
        console.log("Dragging")
    })
})