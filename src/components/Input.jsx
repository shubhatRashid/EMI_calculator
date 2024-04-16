import React from 'react'

const Input = ({state,setState}) => {
  return (
    <div style={inputStyle}>
      <input style={inputStyle} value={state} onChange={(e) => setState(e.target.value)}/>
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