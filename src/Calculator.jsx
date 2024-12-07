import React, { useState } from 'react'

const Calculator = () => {
    const[input,setinput]=useState('')
    const[result,setresult]=useState('')


    const handleclick=(value)=>{
        setinput(input+value)
    }

    const handlecalculate=()=>{
       try{
        setresult(eval(input))
       }
       catch(e){
       console.error(e);
       
       }
    }
    const handleclear=()=>{
        setinput('')
        setresult('')
    }
  return (
    <div>
<input value={input}/>
<div>{result}</div>

    <div className='w-64'>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("1")}}>1</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("2")}}>2</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("3")}}>3</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("+")}}>+</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("4")}}>4</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("5")}}>5</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("6")}}>6</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("-")}}>-</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("7")}}>7</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("8")}}>8</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("9")}}>9</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("*")}}>*</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("0")}}>0</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick(".")}}>.</button>
        <button className='w-16 h-16 bg-orange-300' onClick={handlecalculate}>=</button>
        <button className='w-16 h-16 bg-orange-300' onClick={()=>{handleclick("/")}}>/</button>
        <button className='w-64 h-16 bg-orange-300' onClick={handleclear}>c</button>
        </div>
    </div>
  )
}

export default Calculator