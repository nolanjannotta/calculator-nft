import React, {useEffect, useState} from 'react'
import { useWeb3React } from '@web3-react/core';
import useContract from '../hooks/useContract';
import Mint from "./Mint"
import { ethers } from 'ethers';
import Supply from "./Supply"

// import "./Mint.css"
import "./Body.css"
import images from "../images/images.json"



function Body() {


    
    const {active, library} = useWeb3React();
    const [orderCart, setOrderCart] = useState([])
    const [cartAmountDisplay, setCartAmountDisplay] = useState({0:0, 1:0,2:0,3:0, 4:0})
    const [demoUri, setDemoUri] = useState("")
    const [price, setPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const [colors, setColors] = useState({})
    // const snake = new ethers.Contract(snakeAddr, snakeAbi, library )
    const {calculator} = useContract()

    useEffect(()=> {
      setTotalPrice(orderCart.length * price)
      console.log(orderCart)

    }, [orderCart])

    
    useEffect(()=> {
      const getData = async() => {
        try {
          const _price = await calculator.price()
          let demo1 = await calculator.tokenURI(1)
          const jsonManifestString = atob(demo1.substring(29));
          const jsonManifest = JSON.parse(jsonManifestString);

        setDemoUri(jsonManifest.image)  
        let calcPrice = Number(ethers.utils.formatEther(_price))
        setPrice(calcPrice)
        

        }
        catch (e) {
          console.log(e)
        }
          
      }

      active && getData()
      



      
    }, [active])

    const imageClick = (color) => {
      if(orderCart.includes(color)) {
        // if color is already selected, then remove it
        setOrderCart(orderCart.filter(_color => _color !== color))
        setCartAmountDisplay({...cartAmountDisplay, [color]: 0})

      } 
      else {
        if(orderCart.length >= 5){return}
        setOrderCart(prevCart => [...prevCart, color])
        setCartAmountDisplay({...cartAmountDisplay, [color]: 1})
        console.log(orderCart.length)


      }
      // setTotalPrice(orderCart.length  * price)

    }
    const getFrequency = (starting, color) => {
      let count=starting
      for(let i =0; i<orderCart.length; i++) {
        if(orderCart[i]==color) {count++}
      }
      return count

    }


    const increment = (color) => {
      
      if(orderCart.length >= 5){return}
      setOrderCart(orderCart => [...orderCart, color])
      const count = getFrequency(1,color)
      // console.log(count)
      
      setCartAmountDisplay(cartAmountDisplay => ({...cartAmountDisplay, [color]: count}))
      console.log(orderCart.length)
      // setTotalPrice(prevPrice => prevPrice + price)


    }
    const decrement = (color) => {
      

      const tempArr = orderCart
      const index = orderCart.indexOf(color)
      // console.log(index)
      if(index > -1) {
        tempArr.splice(index,1)
        setOrderCart([...orderCart])
        const count = getFrequency(0,color)
        setCartAmountDisplay(cartAmountDisplay => ({...cartAmountDisplay, [color]: count}))



      }
      console.log(orderCart.length)

      // setTotalPrice(prevPrice => prevPrice - price)


    }

    const Color = (props) => {
      return (

        <div className='color'>
            <img className='color1' style={orderCart.includes(props.index) ? {outline: "5px solid #9d7cbd"} : {}}  src={props.image} alt="color0" width="150px" height="150px" onClick={() => {imageClick(props.index)}}></img>
            {orderCart.includes(props.index) && 
            <div className='buttons'>  
              <button className="button" onClick={() => {decrement(props.index)}} >-</button> 
              <span style={{color: "#a7ede6"}}>{cartAmountDisplay[props.index]}</span> 
              <button className="button" onClick={() => {increment(props.index)}}>+</button> 
            </div>}
            
          </div>
      )
    }

  return (
    <div className='demo_container'>
      


      
        
      <div className='demo_box'>
        
      <div className="try_me">Try Me!</div>

          <object className="demo" id="svg" data={demoUri} type="image/svg+xml"></object>

          </div>
      
      
         <div className='color_container'>

            <div className='colors'>
              <Color image={images.firstImage} index={0}></Color>
              <Color image={images.secondImage} index={1}></Color>
              <Color image={images.thirdImage} index={2}></Color>
              <Color image={images.fourthImage} index={3}></Color>
              <Color image={images.fifthImage} index={4}></Color>

            </div >

            

          <div className="sub_body">

              <div className="price_container">
                <div className="price"> price: {price} ETH</div>
                <div className="price"> total: {totalPrice} ETH</div>
              </div>
            

          <Mint price={price} colorArr={orderCart}>

          </Mint>

          <div className="description">

          
              <p>
              Finally...<br/>
              A fully working, fully on chain calculator. <br/>
              Arguably the first NFT that solves real world problems. <br/>
              No roadmap, just a calculator. <br/>
              100% decentralized, zero centralized servers. <br/>
              Available in 5 color schemes
          


            </p>
          </div>
          </div>

      </div>
      
      
      
    {/* <Footer></Footer> */}
      
    </div>
  )
}

export default Body