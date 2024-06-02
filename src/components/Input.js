import React from 'react'

function Input({text, result}) {
  return (
    <div>
      <div className='inpu'>
        <div className='result'>
            {result}

        </div>
        <div className='text'>
            {text}

        </div>
        
      </div>
    </div>
  )
}

export default Input;
