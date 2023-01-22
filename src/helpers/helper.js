
export const remakeSquare = (id, color, number) => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.rect(20, 20, 150, 100);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.font = "30px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText(number, 90, 80);
}

export const remakeCircle = (id, color, number) => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.font = "30px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText(number, 90, 80);
}

export const remakeTriangle = (id, color, number) => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fill();
    ctx.font = "30px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText(number, 40, 40);
}

export const remakeStar = (id, color, number) => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fill();
    ctx.font = "30px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText(number, 100, 120);
}

export const generateRandomColor = () =>{
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}

export const generateRandomNumber= () => {
    return Math.floor(Math.random() * 1000);
}