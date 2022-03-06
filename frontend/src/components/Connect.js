import React from 'react'
import "./NavBar.css"

import { useEagerConnect } from '../hooks/useEagerConnect';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

function Connect() {
  useEagerConnect()

  const {active, activate, deactivate, account} = useWeb3React();

  const injected = new InjectedConnector();

  const activateMetamask = async () => {
      try {
          activate(injected)
      }
      catch(e) {
          console.log(e)
      }

  }
  const truncate = (addr) => {
    return addr.substring(0,6) + "..." + addr.substring(addr.length -6,addr.length)
  }
  const deactivateMetamask = async() => {
      try {
          deactivate(injected)
      }
      catch(e) {
          console.log(e)
      }

  }
  return (
      <div>
          <div>
            {!active ? 
            <img className="connect" src={"https://arweave.net/uHrzrSOBDAkTi5xoHncX1N1NIIJN-G0Qgl6Wkm0SdE0/connectWallet.png"} alt="activate" onClick={activateMetamask} />
            : 
            <img className="connect" src={"https://arweave.net/uHrzrSOBDAkTi5xoHncX1N1NIIJN-G0Qgl6Wkm0SdE0/connected.png"} alt="deactivate"  onClick={deactivateMetamask} />
             } 

            </div>
            {active && <h3 className="address">hello {truncate(account)}!</h3>}
            



      </div>

      
    
  )
}

export default Connect