const canvas = document.querySelector("canvas");
const lineWidth = document.getElementById("lineWidth");
const colorChange = document.getElementById("colorChange");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
// document.getElementsByClassName("color-option")은 배열이 아니라 HTMLCollection으로 가진다
// 배열로 바꿔주는 이유는 forEach를 쓰기 위해서

const ctx = canvas.getContext("2d") 
// canvas에 그림 그릴 때 사용
canvas.width=800;
 canvas.height=800;
ctx.lineWidth = lineWidth.value;
ctx.colorChange = colorChange.value;
 ctx.lineWidth = 2;
 let painting = false;
 

function onUp(){
    painting = false;
}

function onDown(){
    painting = true;
}


function onMove(event){
    if(painting){
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX,event.offsetY);
}

function onLineWidthChange(event){
   ctx.lineWidth=event.target.value;
}

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event){
    const colorTarget = event.target.dataset.color;
    console.dir(event.target.dataset.color); 
    ctx.strokeStyle = colorTarget
    ctx.fillStyle = colorTarget
    colorChange.value = colorTarget
}

 canvas.addEventListener("mousemove",onMove)
 canvas.addEventListener("mouseup",onUp)
 canvas.addEventListener("mousedown",onDown)
 canvas.addEventListener("mouseleave",onUp)

 lineWidth.addEventListener("change",onLineWidthChange)
 colorChange.addEventListener("change",onColorChange)

colorOption.forEach(color => color.addEventListener("click", onColorClick))