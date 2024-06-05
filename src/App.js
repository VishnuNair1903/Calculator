import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';
import * as math from 'mathjs';

function App() {
  const button_color="#f2a33c"
  const [text, setText] = useState('')
  const [result, setResult] = useState('')


  function handleText(val){
    setText(text+val);
    setResult(val)
  }

  function cal(){
    setResult(math.evaluate(text));
  }

  function handleClear(){
    setText([]);
    setResult('');
  }

  return (
    <div className="App">
      <div className='button-wrap'>
        <Input text={text} result={result} />
        <div className='row'>
        <Button val="7" handleClick={handleText}/>
        <Button val="8" handleClick={handleText}/>
        <Button val="9" handleClick={handleText}/>
        <Button val="/" color={button_color} handleClick={handleText}/>
        </div>
        <div className='row'>
        <Button val="4" handleClick={handleText}/>
        <Button val="5" handleClick={handleText}/>
        <Button val="6" handleClick={handleText}/>
        <Button val="+" color={button_color} handleClick={handleText}/>
        </div>
        <div className='row'>
        <Button val="1" handleClick={handleText}/>
        <Button val="2" handleClick={handleText}/>
        <Button val="3" handleClick={handleText}/>
        <Button val="-" color={button_color} handleClick={handleText}/>
        </div>
        <div className='row'>
        <Button val="0" handleClick={handleText}/>
        <Button val="." handleClick={handleText}/>
        <Button val="=" handleClick={cal}/>
        <Button val="*" color={button_color} handleClick={handleText}/>
        </div>
        <Button val="C" color={button_color} handleClick={handleClear}/>
        
      </div>
      
    </div>
  );
}

export default App;
