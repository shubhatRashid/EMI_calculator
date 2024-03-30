import React from 'react'

const Slider = () => {
  return (
    <div style={sliderStyle}>
      <input style={{width:'100%'}} type='range'/>
    </div>
  )
}
const sliderStyle = {
  width:"100%",
  display:'flex',
  alignItems : 'center',
  justifyContent : 'center'
}
export default Slider