import React, {useEffect} from "react";
import { generateRandomNumber } from '../../helpers/helper'

const Square= ({number, color}) => {
    let random= generateRandomNumber();

    useEffect(()=> {
        let c = document.getElementById("canvas_"+random);
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, 150, 100);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle = "#FF0000";
        ctx.fillText(number, 90, 80);
        ctx.stroke();
    }, [])

    return(
        <>
            <canvas id={'canvas_'+random} className="shape" width="300" height="150" />
        </>
    );
}

export default Square;