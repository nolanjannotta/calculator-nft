import { ethers } from "ethers";
import CalcAbi from  "../ABIs/Calculator.json"


const useContract = () => {
    const calcAddr = "0x81f941f616FCC72c1788A996E24ac230B482a22e"
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const calculator = new ethers.Contract(calcAddr, CalcAbi, provider)






    return {
        calculator

    }

}

export default useContract