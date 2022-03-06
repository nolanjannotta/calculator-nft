import {useState} from "react"
import './App.css';
import Body from './components/Body';
import { Web3ReactProvider } from '@web3-react/core';
import {Web3Provider} from "@ethersproject/providers"
import NavBar from './components/NavBar';
import Blink from './components/Blink';
import Calculators from './components/Calculators';
import Footer from "./components/Footer.js"

const getLibrary = (provider) => {
  return new Web3Provider(provider);
}


function App() {
  const [frontPage, setFrontPage] = useState(true)


  return (
      <div className="landing-wrapper">

        <Web3ReactProvider getLibrary={getLibrary}>
          <NavBar frontPage={frontPage} setFrontPage={setFrontPage}></NavBar>

          {frontPage ? 
          <>          
            <Blink></Blink>
            <Body></Body>
          </>
          : 
          <>
            <Calculators></Calculators>
          </> 
          }
            
        <Footer></Footer> 
        </Web3ReactProvider>
        
        </div>

  );
}

export default App;
