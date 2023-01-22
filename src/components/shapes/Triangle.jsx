import React, {useEffect} from "react";
import { generateRandomNumber } from '../../helpers/helper'

const Triangle= ({number, color}) => {
    let random= generateRandomNumber();

    useEffect(()=> {
        let c = document.getElementById("canvas_"+random);
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(0, 50)
        ctx.lineTo(50, 0)
        ctx.lineTo(100, 50)
        ctx.lineTo(0, 50)
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle = "#FF0000";
        ctx.fillText(number, 40, 40);
        ctx.stroke();
    }, [])

    return(
        <>
            <canvas id={'canvas_'+random} className="shape" width="300" height="150" />
        </>
    );
}

export default Triangle;