import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

export default function Texform(props) {

  const [text, setText] = useState("")
  const [updatedText, setUpdatedText] = useState("")
  // const [copyText, setCopytext] = useState("")
  const [appearedWord, setAappearedWord] = useState("")

  const handleUpperCase = () =>{
    setUpdatedText(text.toUpperCase())
  }

  const handleLowerCase = () => {
    setUpdatedText(text.toLowerCase())
  }

  const handleClear = () => {
    setText("")
    setUpdatedText("")
    setAappearedWord("")
  }

  const handleMostApprearedWord = () => {
    let words= text.split(" ")
    let maxCnt = 0
    let mostApprearedWord = ""
   
    let counted= []
    for(let i=0;i<words.length;i++) {
      if(!counted.includes(words[i])) {
        let cnt =1;
        counted.push(words[i])
        for(let j=i+1;j<words.length;j++) {
          if(words[i]===words[j]) {
            cnt++;
          }
        }
        if(cnt>maxCnt) {
          maxCnt = cnt;
          mostApprearedWord  = words[i];
        }
      }
    }
    
    console.log(mostApprearedWord)
    setAappearedWord(mostApprearedWord)
    // return {"word":mostApprearedWord, "cnt":macCnt}
  }

  const handleCopy = () => {
    var copyText = document.getElementById('myBox')
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  
    alert("Copied the text: " + copyText.value);

  }

  const handleExtraSpaces = () => {
    setUpdatedText(text.trim())
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
        <div className="container my-4">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange= {handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleMostApprearedWord}>Most Appeared Word</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-4">
            <h2>Text Analysis</h2>
            <p>{text.split(" ").length} Word count and {text.length} Character count</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            {/* <p>Copy text: {copyText}</p> */}
            <p>{appearedWord} is appeared</p>
            <h2>Text Preview</h2>
            <p>{updatedText}</p>
        </div>
   </>

  )
}
