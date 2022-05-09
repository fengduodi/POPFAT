const canvas = document.getElementById("canvas");

canvas.width = 750;
canvas.height = 700;

canvas.addEventListener("mousedown", openMouth);
canvas.addEventListener("mouseup", closeMouth);

canvas.addEventListener("touchstart", function(e)
{
    e.preventDefault();
    openMouth();
})

canvas.addEventListener("touchend", function(e)
{
    e.preventDefault();
    closeMouth();
})

const context = canvas.getContext("2d");

const closeImage = new Image();
const openImage = new Image();

closeImage.src = "image/1.jpg";
openImage.src = "image/2.jpg";

let times = 0;

let currentImage = closeImage;

currentImage.onload = function()
{
    Show(this);
}

function Show(image)
{
    context.fillStyle = 'springgreen';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.drawImage(image, 10, 10, canvas.width - 20, canvas.height - 20);

    context.fillStyle = 'white';
    context.font = '120px "Impact"';
    let text = 'P O P F A T';
    let textWidth = context.measureText(text).width;
    context.fillText(text, canvas.width/2 - textWidth / 2, canvas.height - 30);

    context.fillStyle = 'springgreen';
    textWidth = context.measureText(times).width;
    context.fillText(times, canvas.width - textWidth - 20, 120);
}

function openMouth()
{
    if (times == 0)
    {
        var bgm = document.getElementById("bgm");
    
        bgm.play();
    }

    currentImage = openImage;

    times++;

    Show(currentImage);
}

function closeMouth()
{
    currentImage = closeImage;

    Show(currentImage);
}