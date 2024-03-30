import React from 'react'

const Selector = () => {
  return (
    <div style={styles.selector}>
       <div style={styles.options}>
          <p>12</p>
       </div>

       <div style={styles.options}>
          <p>24</p>
       </div>

       <div style={styles.options}>
          <p>36</p>
       </div>

       <div style={styles.options}>
          <p>48</p>
       </div>

       <div style={styles.options} onClick={()=>alert('clicked')}>
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
    backgroundColor : 'gray',
    width:'50px',
    display: 'flex',
    alignItems:'center',
    justifyContent : 'center',
    borderRadius:'50%',
    cursor:'pointer'
  }
}
export default Selector