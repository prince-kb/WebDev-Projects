const details =  document.querySelector('.details');
const resume = document.querySelector('.resume');
const border = document.querySelector('.border');
window.onload = () => {
x();
}
window.addEventListener('resize', () => {
    x();
});

const x = ()=>{
    if(window.innerWidth < 768){
        details.style.flexDirection = 'column';
        border.style.display = 'none';
    } else {
        details.style.flexDirection = 'row';
        border.style.display = 'block';
    }
}