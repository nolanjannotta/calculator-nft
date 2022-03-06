const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  networks: {

    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },

    rinkeby: {
      provider: () => new HDWalletProvider('084a02b79e5d8fb14b086d6764e8cd4078fe3af679cf9a94f284546c608f6e65', 'https://eth-rinkeby.alchemyapi.io/v2/eriQZWQGeXNylGAMxvyOVIBe4JyU0Kxz'),
      network_id: 4,       // Ropsten's id
      gas: 7000000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    kovan: {
      provider: () => new HDWalletProvider('084a02b79e5d8fb14b086d6764e8cd4078fe3af679cf9a94f284546c608f6e65', 'https://eth-kovan.alchemyapi.io/v2/NRDFJc4u-7h0ja18_HBTmMTJe5HwZ7Ue'),
      network_id: 42,       // Ropsten's id
      gas: 7000000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    
    
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

};
