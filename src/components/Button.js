import React from 'react'

function Button({val, color, handleClick}) {
  return (
    <div className='but' style={{backgroundColor:color}} onClick={()=>handleClick(val)}>
        {val}
        
      
    </div>
  )
}

export default Button;
