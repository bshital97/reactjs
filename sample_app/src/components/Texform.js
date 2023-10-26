import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

export default function Texform(props) {

  const [text, setText] = useState("")

  const toUpperCase = () =>{
    setText(text.toUpperCase())
  }

  const toLowerCase = () => {
    setText(text.toLowerCase())
  }
  const onHandleChange = (event) => {
    setText(event.target.value)
  };
  return (
    <>
        <div className="container my-4">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange= {onHandleChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={toUpperCase}>Upper Case</button>
            <button className="btn btn-primary" onClick={toLowerCase}>Lower Case</button>
        </div>
        <div className="container my-4">
            <h2>Text Analysis</h2>
            <p>{text.split(" ").length} Word count and {text.length} Character count</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Text Preview</h2>
            <p>{text}</p>
        </div>
   </>

  )
}
