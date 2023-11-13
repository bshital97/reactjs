import React, { useState } from 'react'

export default function Texform(props) {
  console.log(props)
  const modeType = props.mode==='light' ? 'white' : '#212529'
  const textMode = props.mode==='light' ? '#212529' : 'white'

  const [text, setText] = useState("")
  const [updatedText, setUpdatedText] = useState("")
  // const [copyText, setCopytext] = useState("")
  const [appearedWord, setAappearedWord] = useState("")

  const handleUpperCase = () =>{
    setUpdatedText(text.toUpperCase())
    props.showAlert("Upper case", "success")
  }

  const handleLowerCase = () => {
    setUpdatedText(text.toLowerCase())
    props.showAlert("Lower case", "success")
  }

  const handleClear = () => {
    setText("")
    setUpdatedText("")
    setAappearedWord("")
    props.showAlert("Clear", "success")
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
    
    // console.log(mostApprearedWord)
    setAappearedWord(mostApprearedWord)
    // return {"word":mostApprearedWord, "cnt":macCnt}
    props.showAlert("Most appeared word", "success")
  }

  const handleCopy = () => {
    var copyText = document.getElementById('myBox')
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  
    // alert("Copied the text: " + copyText.value);
    props.showAlert("Copied the text" + copyText.value, "success")

  }

  const handleExtraSpaces = () => {
    setUpdatedText(text.trim())
    props.showAlert("Extra spaxe", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  // console.log(modeType)
  return (
      <>
        <div className="container my-4" style={{color:textMode}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: modeType, color:textMode}} id="myBox" rows="8" value={text} onChange= {handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleMostApprearedWord}>Most Appeared Word</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-4" style={{color:textMode}}>
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
