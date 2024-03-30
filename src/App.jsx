import React from 'react'
import {Slider,Input,Selector} from "./components"
const App = () => {
  return (
    <div style={styles.root}>
      <h1>EMI CALCULATOR</h1>
      <div style={styles.container}>

        <div style={styles.innerContainer}>
          <h3>Total Cost Of Asset</h3>
          <Input/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Interest Rate (in %)</h3>
          <Input/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Processing Fee (in %)</h3>
          <Input/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Down Payment</h3>
          <Slider/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Loan Per Month</h3>
          <Slider/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Tenure</h3>
          <Selector/>
        </div>

      </div>
    </div>
  )
}
const styles = {
  root:{width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  container : {
    width:'90%',
    display : 'flex',
    flexDirection : 'column',
    gap : '10px',
    justifyContent:'center',
    alignItems: 'center',
  },
  innerContainer :{
    width:"100%"
  }
}
export default App