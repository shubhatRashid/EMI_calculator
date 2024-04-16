import React, { useEffect, useState } from 'react'
import {Slider,Input,Selector} from "./components"
const App = () => {
  const [totalCost,setTotalCost] = useState(0)
  const [interestRate,setInterestRate] = useState(20)
  const [processingFee,setProcessingFee] = useState(0)
  const [downPaymentRate,setDownPaymentRate] = useState(0)
  const [totalDownPaymentAmount,setTotalDownPaymentAmount] = useState(0)
  const [loanPerMonthRate,setLoanPerMonthRate] = useState(0)
  const [loanPerMonthAmount,setLoanPerMonthAmount] = useState(0)
  const [tenure,setTenure] = useState(12)
  const [principalAmount,setPrincipalAmount] = useState(0)

  useEffect(() => {
    console.log('Total Cost',totalCost)
    console.log('processingFee',processingFee)

    let downPaymentAmount = (downPaymentRate * totalCost)/100
    console.log('downPaymentAmount',downPaymentAmount)

    let loanToBeSanctioned = totalCost-downPaymentAmount
    setPrincipalAmount(loanToBeSanctioned)
    console.log('loan to be sanctioned',loanToBeSanctioned)

    let processingFeeAmount = (processingFee*loanToBeSanctioned) /100
    console.log('processingFeeAmount',processingFeeAmount)

    let requiredDownPayment = downPaymentAmount + processingFeeAmount
    setTotalDownPaymentAmount(requiredDownPayment)
    console.log('requiredDownPayment',requiredDownPayment)

    let monthlyInterestRate = interestRate / (12*100)
    console.log('monthlyInterestRate',monthlyInterestRate)

    let EMI = (loanToBeSanctioned * monthlyInterestRate * (1+monthlyInterestRate)**tenure)/(((1+monthlyInterestRate)**tenure) -1)
    setLoanPerMonthAmount(EMI)
    console.log('EMI',EMI)
    
    let percentEmi = (EMI / loanToBeSanctioned) *100
    setLoanPerMonthRate(percentEmi)

  },[totalCost,interestRate,processingFee,downPaymentRate,tenure]) 

  return (
    <div style={styles.root}>
      <h1>EMI CALCULATOR</h1>
      <div style={styles.container}>

        <div style={styles.innerContainer}>
          <h3>Total Cost Of Asset</h3>
          <Input state={totalCost} setState={setTotalCost}/>
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
          <Slider state={downPaymentRate} setState={setDownPaymentRate} totalAmount={totalDownPaymentAmount}/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Tenure</h3>
          <Selector state={tenure} setState={setTenure}/>
        </div>

        <div style={styles.innerContainer}>
          <h3>Loan per Month</h3>
          <h2>Rs {Math.ceil(loanPerMonthAmount)} /= </h2>
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