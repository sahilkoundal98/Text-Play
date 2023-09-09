// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('warning');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({ msg: message, type: type});
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  

  const toggleMode = ()=>{
    if (mode === 'warning') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert('Dark mode has been enabled','success')
    }
    else {
      setMode('warning');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled','success')
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="Text~Play ◕_◕ " mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm heading = "Enter the Text to Analyze 📃" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;