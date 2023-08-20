require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INFURA_ENDPOINT = `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    testnet: {
      provider: function() {
        return new HDWalletProvider({
          privateKeys: [PRIVATE_KEY],
          providerOrUrl: INFURA_ENDPOINT
        });
      },
      network_id: '11155111', // Example: Rinkeby's id is 4
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  // Rest of the configuration...
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  api_keys: {
    etherscan: process.env.PRIVATE_KEY
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
};
