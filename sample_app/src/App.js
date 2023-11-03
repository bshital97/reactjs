// import logo from './logo.svg';
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
// import Texform from './components/Texform';
function App() {
  return (
    <div>
      <Navbar title="TextUtilsApp" about="About"></Navbar>
      <div className="container my-10">
        {/* <Texform heading="Enter the text to analyze below"></Texform> */}
        <Aboutus/>
      </div>
    </div>
  );
}

export default App;
