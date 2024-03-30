import React from 'react'

const Input = () => {
  return (
    <div style={inputStyle}>
      <input style={inputStyle}/>
    </div>
  )
}
const inputStyle = {
  width:'100%',
  borderRaduis:'50px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}
export default Input