import React, {useState} from "react";


export default function TextForm(props){
    const titleCase = () =>{
        let  newText= text.charAt(0).toUpperCase() +text.substr(1);
        setText(newText);
    }
    const handleCopy= () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const firstChar = () =>{
        let newText =text.charAt(0);
        setText(newText);
    }
    const clearClick = () =>{
        let newText='';
        setText(newText);
    }
    const handleUpClick = () =>{
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        let newText =text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    return(
        <>
        <div className="container" style ={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor: props.mode === 'dark' ? 'black' : 'white'}} id="myBox" rows="10"/>
            </div>
            <button className="btn btn-warning mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-warning mx-2" onClick={handleLowClick}>Convert to Uppercase</button>
            <button className="btn btn-warning mx-2" onClick={clearClick}>Clear Text</button>
            <button className="btn btn-warning mx-2" onClick={titleCase}>Title Case</button>
            <button className="btn btn-warning mx-2" onClick={firstChar}>First Character</button>
            <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>
        </div>
            <div className="container my-3" style ={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes will be required to read it</p>
            </div>
            </>
    )
}