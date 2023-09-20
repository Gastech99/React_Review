import React from 'react'
import '../components/styles/Button.css'

function Buttons({content, click}) {
  return (
    <>
        <button className='btn' onClick={click}>{content}</button>
    </>
  )
}

export default Buttons