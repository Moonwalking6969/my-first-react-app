import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {useState} from "react";

function App() {
    const [mode,setMode] = useState('light'); //Wether dark mode is enabled or not
    const toggleMode = ()=>{
        if(mode==='light'){
            setMode('dark');
            document.body.style.backgroundColor='black';
            console.log("Dark Mode Enabled")

        }else{
            setMode('light');
            document.body.style.backgroundColor='white';
            console.log("Light Mode Enabled")
        }
    }
    return (
            <>
              <Navbar title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
                <div className="container"><TextForm heading ="Enter the text to analyze below"></TextForm></div>
                <About></About>
            </>
        );
      }

export default App;
