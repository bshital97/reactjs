// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Texform from './components/Texform';
function App() {
  return (
    <div>
   <Navbar title="TextUtilsApp" about="About"></Navbar>
  {/* <Navbar></Navbar> */}
  <div className="container my-3">
    <Texform heading="Enter the text to analyze below"></Texform>
  </div>
 
  </div>
  );
}

export default App;
