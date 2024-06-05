import React from 'react'
import '../App.css'

function Input({text, result}) {
  return (
    <div>
      <div className='input'>
        <div className='text'>
            {text}

        </div>
        <div className='result'>
            {result}

        </div>
        
        
      </div>
    </div>
  )
}

export default Input;
