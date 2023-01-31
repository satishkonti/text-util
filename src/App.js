import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextForm from './textForm';
import React, { useState } from 'react';
import Alert from './Alert';
// import { Routes, Route } from 'react-router-dom'

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("success ! ", "Dark mode has been enabled");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success ! ", "Light mode has been enabled")

    }
  }

  return (

    <>  
      <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text here" mode={mode} showAlert={showAlert}/>
      </div>

      </>
  );
  }

