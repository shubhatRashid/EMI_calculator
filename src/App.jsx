import React, { useState } from 'react'
import {Slider,Input,Selector} from "./components"
const App = () => {
  const [totalCost,setTotalCost] = useState(0)
  const [interestRate,setInterestRate] = useState(0)
  const [processingFee,setProcessingFee] = useState(0)
  const [downPayment,setDownPayment] = useState(0)
  const [loanPerMonth,setLoanPerMonth] = useState(0)
  const [tenure,setTenure] = useState(12)

  
  return (
    <div style={styles.root}>
      <h1>EMI CALCULATOR</h1>
      <div style={styles.container}>

        <div style={styles.innerContainer}>
          <h3>Total Cost Of Asset</h3>
          <Input state={totalCost} setState={setTotalCost} />
        </div>

        <div style={styles.innerContainer}>
          <h3>Interest Rate (in %)</h3>
          <Input state={interestRate} setState={setInterestRate}/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Processing Fee (in %)</h3>
          <Input  state={processingFee} setState={setProcessingFee}/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Down Payment</h3>
          <Slider state={downPayment} setState={setDownPayment}/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Loan Per Month</h3>
          <Slider state={loanPerMonth} setState={setLoanPerMonth}/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Tenure</h3>
          <Selector state={tenure} setState={setTenure}/>
        </div>

      </div>
    </div>
  )
}
const styles = {
  root : {
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  container : {
    width:'70%',
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