import React from 'react'

const Slider = ({state,setState}) => {
  return (
    <div style={sliderStyle}>
      <input 
        style={{width:'100%'}} 
        type='range' 
        value={state} 
        onChange={(e)=> setState(e.target.value)}
        min="0" max="100" oninput="this.nextElementSibling.value = this.value"
        />
      <div style={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
        <p>0%</p>
        <output>{state}</output>
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