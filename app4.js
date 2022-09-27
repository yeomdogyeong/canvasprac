const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d") 
// canvas에 그림 그릴 때 사용
canvas.width=800;
 canvas.height=800;

 ctx.lineWidth = 2;
 
const colors = [
    "#ff3838",
"#ffb8b8",
"#c56cf0",
"#ff9f1a",
"#fff200",
"#32ff7e",
"#7efff5",
]

const canSize = innerWidth;

const startPoint = {
    x:Math.random()*canSize,
    y:Math.random()*canSize,
};

function onclick(event){
    ctx.beginPath();
    ctx.moveTo(startPoint.x,startPoint.y);
    const color = colors[Math.floor(Math.random()*colors.length)]
    ctx.strokeStyle = color;
ctx.lineTo(event.offsetX, event.offsetY)
ctx.stroke();


}

 canvas.addEventListener("mousemove",onclick)