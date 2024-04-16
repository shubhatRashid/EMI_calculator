import React from 'react'

const Slider = ({state,setState,totalAmount}) => {
  return (
    <div style={sliderStyle}>
      <input 
        style={{width:'100%'}} 
        type='range' 
        min="0" max="100" 
        value={state}
        onChange={(e)=> setState(e.target.value)}
        />
      <div style={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
        <p>0%</p>
        <h3>RS {totalAmount}</h3>
        <p>100%</p>
      </div>
    </div>
  )
}
const sliderStyle = {
  width:"100%",
  display:'flex',
  flexDirection:'column',
  alignItems : 'center',
  justifyContent : 'center'
}
export default Slider