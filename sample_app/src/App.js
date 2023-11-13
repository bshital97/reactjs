// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Texform from './components/Texform';
import Alerts from './components/Alerts';
function App() {

  const [mode, setMode] = useState("light")
  const [checked, setChecked] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=() => {
    if(mode==='dark') {
      setMode("light")
      setChecked(false)
      document.body.style.backgroundColor= 'white'
      showAlert("Light Mode is enabled", )
    } else {
      setMode("dark")
      setChecked(true)
      document.body.style.backgroundColor= '#212529'
      showAlert("Dark Mode is enabled")
    }

  }
  return (
    <div>
      <Navbar title="TextUtilsApp" about="About" mode={mode} toggleMode={toggleMode} checked={checked}></Navbar>
      <Alerts alert={alert}/>
      <div className="container my-10">
        <Texform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} ></Texform>
        {/* <Aboutus/> */}
      </div>
    </div>
  );
}

export default App;
