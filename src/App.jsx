import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';
import "./App.css";

function App() {
  const [calVal, setcalVal]= useState("");
  const onButtonClick = (buttonText)=>{
    if(buttonText === 'C'){
      setcalVal("");
    }
    else if(buttonText==='='){
      const result =eval(calVal); 
      setcalVal(result);
    }
    else{
      const newDisplayVal = calVal + buttonText;
      setcalVal(newDisplayVal);
    }
  }

  return (
    <div className="body">
    <div className="calculator">
      <Display displayVal={calVal}></Display>
      <ButtonContainer onButtonClick = {onButtonClick}></ButtonContainer>
    </div>
    </div>
  )
}

export default App;
