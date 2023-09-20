import React from 'react'

function Buttons({content, click}) {
  return (
    <>
        <button onClick={click}>{content}</button>
    </>
  )
}

export default Buttons