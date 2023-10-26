import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

export default function Texform(props) {

  const [text, setText] = useState("Text here")

  const toUpperCase = () =>{
    setText(text.toUpperCase())
  }
  const onHandleChange = (event) => {
    setText(event.target.value)
  };
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange= {onHandleChange}></textarea>
           
        </div>
        <button className="btn btn-primary" onClick={toUpperCase}>UpperCase</button>
        
        {/* <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                        />
            </div>
        </form> */}
    </div>
  )
}
