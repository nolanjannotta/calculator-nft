import React, {useState, useEffect} from 'react'
import { useWeb3React } from '@web3-react/core';
import useContract from '../hooks/useContract';

import "./Supply.css"


function Supply() {


    const {active, library} = useWeb3React();
    const [amountLeft, setAmountLeft] = useState('Loading supply...')
    const {calculator} = useContract();
  

    useEffect(() => {
        const loadAmountLeft = async() => {
            const currentId = await calculator.currentSupply()
            const max = await calculator.maxAmount()
            setAmountLeft("only " + (max-currentId.toString()) + " left!!")

        }
        active && loadAmountLeft()

        calculator.on("TokenMint", loadAmountLeft);

      return () => {
        calculator.off("TokenMint", loadAmountLeft);
      }


        

       


    },[active])



  return (
      <div className="supply_contianer">
        {active ? 
        <h1 className='blinker'>{amountLeft}</h1> : 
        <h1 className='blinker'>Please connect</h1>}  
      </div>
      
    
  )
}

export default Supply