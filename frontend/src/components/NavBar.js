import React, {useState, useEffect} from 'react'
import Connect from './Connect'
import "./NavBar.css"
import useContract from '../hooks/useContract';
import { useWeb3React } from '@web3-react/core';

function NavBar(props) {
  const [balance, setBalance] = useState(0)
  const {account, active} = useWeb3React()


  const {calculator} = useContract();

  useEffect(() => {
      const getBalance = async() => {
          const bal = await calculator.balanceOf(account)
          setBalance(bal)
      }
      active && getBalance()
      calculator.on("TokenMint", getBalance);

      return () => {
        calculator.off("TokenMint", getBalance);
      }
  }, [active])
  return (
    <div className='nav'>
        {props.frontPage ? 
        <button onClick={()=>{props.setFrontPage(!props.frontPage)}} className='balance'> You own {balance.toString()} calculators!</button>
        :
        <button onClick={()=>{props.setFrontPage(!props.frontPage)}} className='balance'> Back to home</button>
      }
          



      <div className="title_container">
   
          <img className="title" src={"https://arweave.net/0Veqy2zkc6pyOuc1d7PFfIDXERdUkAtdSZFvvF4hoCA"} alt="snake logo" />

      </div>

    <Connect>

    </Connect>

    </div>
  )
}

export default NavBar