import React, {useEffect, useState} from 'react'
import "./Footer.css"
import useContract from '../hooks/useContract';



function Footer() {

    const {calculator} = useContract()
    const [address, setAddress] = useState("")
    const [owner, setOwner] = useState("")
    useEffect(()=> {
        const loadData = async() => {
            const address = await calculator.address
            const owner = await calculator.owner()
            setAddress(address)
            setOwner(owner)
        }
        loadData()
    })
    
  return (
      <div className="footer_container">
          <a style={{textDecoration: "none"}}  href={`https://rinkeby.etherscan.io/address/${address}`} target="_blank">Etherscan</a>
          <div>Open Sea</div>
          <div>Creator: {owner}</div>

      </div>
    
  )
}

export default Footer