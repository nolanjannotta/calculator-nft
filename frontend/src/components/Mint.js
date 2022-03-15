import React, {useState, useEffect} from 'react'
import { useWeb3React } from '@web3-react/core';
import useContract from '../hooks/useContract';
import { ethers } from 'ethers';
import "./Body.css"

function Mint(props) {

    const {library} = useWeb3React();
    const [message, setMessage] = useState("")
    const {calculator} = useContract()

    useEffect(() => {
      if (props.colorArr.length > 0) {
        setMessage("")
      }
  
    },[props.colorArr])
  


    const mintCalc = async() => {
        const calcSigner = calculator.connect(library.getSigner())
        const numMints = props.colorArr.length
        if(numMints == 0) {
          setMessage("*please select at least one color scheme")
          return;
        }
        setMessage("")
        const currentPrice = numMints * props.price
        console.log(currentPrice)
        await calcSigner.mint(props.colorArr, {value: ethers.utils.parseEther(currentPrice.toString())})
        // await calcSigner.withdrawFunds()
        // await results.wait()
        // window.location.reload()

        // console.log(library.getSigner())
    }


  return (
    <div className='mint_container'>

    <div className="message">{message}</div>

    
    <img className="mint_image" src={"https://arweave.net/0kUjQkpxX9-7v6CMGCQIgkTZ3ga288Pke3Pl7Nz9Yfc"} alt="mint" onClick={mintCalc} ></img>

    </div>
  )
}

export default Mint