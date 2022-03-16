import React, {useEffect, useState} from 'react'
import { useWeb3React } from '@web3-react/core';
import useContract from '../hooks/useContract';
import "./Calculators.css"


function Calculators() {
    const [calculators, setCalculators] = useState([])
    const {active, account} = useWeb3React()
    const [loading, setLoading] = useState(true)

    const {calculator} = useContract()

    useEffect(()=> {

        const loadCalculators = async() => {
            const balance = await calculator.balanceOf(account)
            let uris =[]
            
            for(let i=0; i<balance.toNumber(); i++) {
                const id = await calculator.tokenOfOwnerByIndex(account, i)
                let demo1 = await calculator.tokenURI(id)
                console.log(demo1)
                const jsonManifestString = atob(demo1.substring(29));
                const jsonManifest = JSON.parse(jsonManifestString);
                uris.push(jsonManifest.image)                

                

            }
             
            setCalculators(uris)
            setLoading(false)

                
        }

        
        active && loadCalculators()
         

    },[active])

    const returnImage = (uri,index) => {
        return (
            <div className="owned_calc">
                <a className="link" href={uri} target="_blank">full screen</a>
                <object style={{boxShadow: "4px 4px 3px 1px #9d7cbd"}} id="svg" key={index} data={uri} type="image/svg+xml" width="150px"></object>
            </div>
        )

    }
  return (
   

        <div className='calc_container'>

          {loading ? <div className="loading"> Loading...</div> : 
        
            calculators.map((uri,index) =>  {return returnImage(uri, index)})
            }
  
        </div>
        
        
  )
}

export default Calculators