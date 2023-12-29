    const box1=document.querySelectorAll(".box");
    const image = document.querySelector('.image')
    console.log(box1)
box1.forEach(b=>{
    b.addEventListener("dragover",(e) => {
        e.preventDefault();
        // console.log("Dragging")
        b.classList.add("hovered");
    })
    b.addEventListener("dragleave",()=>{
        b.classList.remove("hovered");
    })
    b.addEventListener("drop",()=>{
        b.appendChild(image);
        b.classList.remove("hovered");
    })
    
})
