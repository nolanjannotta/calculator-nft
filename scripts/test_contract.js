
module.exports = async function (callback) {
    const Web3 = require('web3');
    const web3 = new Web3('https://eth-rinkeby.alchemyapi.io/v2/eriQZWQGeXNylGAMxvyOVIBe4JyU0Kxz')
    const account = web3.eth.accounts.privateKeyToAccount('084a02b79e5d8fb14b086d6764e8cd4078fe3af679cf9a94f284546c608f6e65')
    web3.eth.accounts.wallet.add(account);
    // provider = () => new HDWalletProvider('084a02b79e5d8fb14b086d6764e8cd4078fe3af679cf9a94f284546c608f6e65', 'https://eth-rinkeby.alchemyapi.io/v2/eriQZWQGeXNylGAMxvyOVIBe4JyU0Kxz')
    const accounts = await web3.eth.getAccounts()
    const calcAddress = "0x81f941f616FCC72c1788A996E24ac230B482a22e"
    const ABI = require('../build/contracts/Calculator.json')
    const testABI = require('./testnft.json')
    const calculator = new web3.eth.Contract(ABI.abi, calcAddress)
    const testnft = new web3.eth.Contract(testABI, "0x776462c250d9897793EB708dE93Ef03e625201E1")

    const user = accounts[0]

    
    const buyCalc = async () => {
        // await calculator.methods.mint([0,1,2,3,4]).send({from: accounts[3], gas: 6721975, gasPrice: '2000000000', value: web3.utils.toWei(".15", "ether")}) 
        // await calculator.methods.mint([0,1,2,3,4]).send({from: accounts[3], gas: 6721975, gasPrice: '2000000000'}) 
        // await calculator.methods.setFrontEnd("https://arweave.net/p_1aJVzdIydY9ayThpeS6TELSnt1x1TIN_9gN6kEmwI").send({from: account.address, gas: 405909})
            await calculator.methods.withdrawFunds().send({from: account.address, gas:50000})
        // const current = await calculator.methods.currentSupply().call()
        // const uri = await calculator.methods.tokenURI(1).call()
        // console.log(uri)
    }
    buyCalc()
    

};