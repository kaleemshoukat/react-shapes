import React, {useEffect} from "react";
import { generateRandomNumber } from '../../helpers/helper'

const Star= ({number, color}) => {
    let random= generateRandomNumber();

    useEffect(()=> {
        let c = document.getElementById("canvas_"+random);
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(108, 0.0);
        ctx.lineTo(141, 70);
        ctx.lineTo(218, 78.3);
        ctx.lineTo(162, 131);
        ctx.lineTo(175, 205);
        ctx.lineTo(108, 170);
        ctx.lineTo(41.2, 205);
        ctx.lineTo(55, 131);
        ctx.lineTo(1, 78);
        ctx.lineTo(75, 68);
        ctx.lineTo(108, 0);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle = "#FF0000";
        ctx.fillText(number, 100, 120);
        ctx.stroke();
    }, [])

    return(
        <>
            <canvas id={'canvas_'+random} className="shape" width="300" height="300" />
        </>
    );
}

export default Star;