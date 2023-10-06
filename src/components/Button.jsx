import React from 'react'

const Button = ({bgColor,text,size,borderRadius,color}) => {
  return (
    <button style={{backgroundColor:bgColor,color,borderRadius}} className='text-${size} p-3 hover:drop-shadow-xl'>
      {text}
    </button>
  )
}

export default Button