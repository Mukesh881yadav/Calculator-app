import React, { useEffect, useRef, useState } from 'react'
import './Calculator.css';
function Calculator() {
  const [result,setResult]=useState("");
  const inputRef=useRef(null)
  // useEffect(()=>inputRef.current.focus());

  function handleclick(e){
setResult(result.concat(e.target.name));
  }

  function backspace(){
    setResult(result.slice(0,result.length-1))
  }

  function clear(){
    setResult('')
  }

  function calculate(){
  try {
    setResult(eval(result).toString())
  }catch(error){
    setResult("Error")
  }
  }
  
  return (
<>
<div className='container  d-flex justify-content-center mt-5'>
  <div className='cal_box text-center'>
   
    <div className='enter_value'>
      <input type="text" id='input_data' value={result} ref={inputRef}></input>
    </div>
    

    <div id='btns'>
    <div className='row'>
     <div className='col-6'> <button className='topbtn' id='clear' onClick={clear}>Clear</button></div>
     <div className='col-6'> <button className='topbtn' id='backspace' onClick={backspace}>C  </button></div>
    </div>

    <div className='row mt-3'>
     <div className='col-3'> <button className='numbers' name='7' onClick={handleclick}>7</button></div>
     <div className='col-3'> <button className='numbers'name='8' onClick={handleclick}>8</button></div>
     <div className='col-3'> <button className='numbers'name='9' onClick={handleclick}>9</button></div>
     <div className='col-3'> <button className='numbers'name='/' onClick={handleclick}>/</button></div>
    </div>
    <div className='row mt-3'>
     <div className='col-3'> <button className='numbers'name='4' onClick={handleclick}>4</button></div>
     <div className='col-3'> <button className='numbers'name='5' onClick={handleclick}>5</button></div>
     <div className='col-3'> <button className='numbers'name='6' onClick={handleclick}>6</button></div>
     <div className='col-3'> <button className='numbers'name='*' onClick={handleclick}>*</button></div>
    </div>
    <div className='row mt-3'>
     <div className='col-3'> <button className='numbers'name='1' onClick={handleclick}>1</button></div>
     <div className='col-3'> <button className='numbers'name='2' onClick={handleclick}>2</button></div>
     <div className='col-3'> <button className='numbers'name='3' onClick={handleclick}>3</button></div>
     <div className='col-3'> <button className='numbers'name='-' onClick={handleclick}>-</button></div>
    </div>

    <div className='row mt-3'>
     <div className='col-3'> <button className='numbers' name='.' onClick={handleclick}>.</button></div>
     <div className='col-3'> <button className='numbers' name='0' onClick={handleclick}>0</button></div>
     <div className='col-3'> <button className='numbers' id='result' onClick={calculate}>=</button></div>
     <div className='col-3'> <button className='numbers' name='+' onClick={handleclick}>+</button></div>
    </div>
    </div>

  </div>
</div>
</>
  )
}

export default Calculator