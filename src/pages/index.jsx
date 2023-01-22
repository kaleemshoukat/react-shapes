import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import Square from '../components/shapes/Square';
import Circle from '../components/shapes/Circle';
import Triangle from '../components/shapes/Triangle';
import Star from '../components/shapes/Star';
import { remakeSquare, remakeCircle, remakeStar, remakeTriangle, generateRandomColor } from '../helpers/helper'

const Index=()=>{
    const [values, setValues] = useState({});
    const [shapeType, setShapeType] = useState('square');
    const [shapes, setShapes] = useState(0);
    const [shapesData, setShapesData] = useState([]);
    let shapesArr = [];
    let colorsArr = [];

    const changeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (document.getElementsByClassName("animation").length > 0){
            Array.from(document.querySelectorAll('.shape.animation')).forEach(function(el) {
                el.classList.remove('animation');
            });
        }

        var data = new FormData(event.target)
        let formData = Object.fromEntries(data.entries())
        console.log(formData);

        setShapes(formData.numberOfShapes);
        setShapeType(formData.shape);

        shapesArr = [];
        document.getElementById('selected-boxes').innerHTML = "0";
        document.getElementById('animated-boxes').innerHTML = "0";
        document.getElementById('colored-boxes').innerHTML = "0";
    }

    useEffect(()=> {
        document.getElementsByClassName('print').innerHTML = "";

        var arr=[];
        for (let i=1; i<=shapes; i++){
            if (shapeType==='square'){
                arr.push(<Square number={i} color={"#FFFFFF"} />);
            }
            else if(shapeType==='circle'){
                arr.push(<Circle number={i} color={"#FFFFFF"} />);
            }
            else if(shapeType==='triangle'){
                arr.push(<Triangle number={i} color={"#FFFFFF"} />);
            }
            else{
                arr.push(<Star number={i} color={"#FFFFFF"} />);
            }
        }
        console.log(arr);

        setShapesData([]);
        setShapesData(arr);
    }, [shapes, shapeType]);

    const handleClick = (event, index) => {
        // 👇️ refers to the div element
        console.log(event.currentTarget);
        console.log(index);
        console.log('div clicked');

        if (!shapesArr.includes(index)){
            shapesArr.push(index);
            console.log(shapesArr);
        }

        //make selectable
        // let ele=document.getElementById('selected_div_'+index);

        let result = shapesArr.map(val => JSON.stringify(val+1)).join(",")
        document.getElementById('selected-boxes').innerHTML = "";
        document.getElementById('selected-boxes').innerHTML = result;
    };

    const animateShapes=() => {
        shapesArr.forEach((item, index) => {
            console.log('item',item);
            var id = document.getElementById('selected_div_'+item).children[0].id;
            console.log(id);
            document.getElementById(id).classList.add('animation');
        })

        let result = shapesArr.map(val => JSON.stringify(val+1)).join(",")
        document.getElementById('animated-boxes').innerHTML = "";
        document.getElementById('animated-boxes').innerHTML = result;
    }

    const changeColorOfShapes = () => {
        colorsArr = [];
        shapesArr.forEach((item, index) => {
            console.log('item',item);
            var id = document.getElementById('selected_div_'+item).children[0].id;
            console.log(id);

            let number = item + 1;
            let color = generateRandomColor();
            colorsArr.push({number, color});

            if (shapeType==='square'){
                remakeSquare(id, color, number);
            }
            else if(shapeType==='circle'){
                remakeCircle(id, color, number);
            }
            else if(shapeType==='triangle'){
                remakeTriangle(id, color, number);
            }
            else{
                remakeStar(id, color, number);
            }
        })

        let result = colorsArr.map(val => JSON.stringify(val.number+' is '+val.color)).join(",")
        document.getElementById('colored-boxes').innerHTML = "";
        document.getElementById('colored-boxes').innerHTML = result;
    }

    return (
        <div className="col-md-12">
            <form onSubmit={handleSubmit} className="create-form">
                <div className="col-md-12 mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Select Shape</label>
                            <select name="shape" onChange={changeHandler} className="form-control">
                                <option value="square">Square</option>
                                <option value="circle">Circle</option>
                                <option value="triangle">Triangle</option>
                                <option value="star">Star</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label>Number of Shapes</label>
                            <input type="number" min="1" max="6" name="numberOfShapes" onChange={changeHandler} className="form-control" />
                        </div>
                        <div className="col-md-12">
                            <Button variant="primary" type="submit" className="m-2">Create</Button>
                            <Button onClick={animateShapes} variant="primary" type="button" className="m-2">Animate</Button>
                            <Button onClick={changeColorOfShapes} variant="primary" type="button" className="m-2">Change Random Color</Button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row d-flex h-100 align-items-center mt-5 print">
                {
                    shapesData.map((item, index) => (
                         <div className="col-md-4" id={'selected_div_'+index} onClick={event => handleClick(event, index)} key={index}>{item}</div>
                    ))
                }
            </div>
            <div className="col-md-12 mt-5">
                <p>Selected Boxes: <span id="selected-boxes">0</span></p>
                <p>Animated Boxes: <span id="animated-boxes">0</span></p>
                <p>Colored Boxes: <span id="colored-boxes">0</span></p>
            </div>
        </div>
    )
}

export default Index;