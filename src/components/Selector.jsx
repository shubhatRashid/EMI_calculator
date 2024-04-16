import React from 'react'

const Selector = ({state,setState}) => {
  return (
    <div style={styles.selector}>
       <div style={{...styles.options,backgroundColor:state==12?'blue':'gray'}} onClick={()=>setState(12)}>
          <p>12</p>
       </div>

       <div style={{...styles.options,backgroundColor:state==24?'blue':'gray'}} onClick={()=>setState(24)}>
          <p>24</p>
       </div>

       <div style={{...styles.options,backgroundColor:state==36?'blue':'gray'}} onClick={()=>setState(36)}>
          <p>36</p>
       </div>

       <div style={{...styles.options,backgroundColor:state==48?'blue':'gray'}} onClick={()=>setState(48)}>
          <p>48</p>
       </div>

       <div style={{...styles.options,backgroundColor:state==60?'blue':'gray'}} onClick={()=>setState(60)}>
          <p>60</p>
       </div>
    </div>
  )
}
const styles = {
  selector : {
    display: 'flex',
    alignItems:'center',
    justifyContent : 'space-around',
  },
  options:{
    color:'white',
    width:'50px',
    display: 'flex',
    alignItems:'center',
    justifyContent : 'center',
    borderRadius:'50%',
    cursor:'pointer'
  }
}
export default Selector