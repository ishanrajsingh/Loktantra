require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); 

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,  // RPC URL from Alchemy/Infura
      accounts: [process.env.PRIVATE_KEY], // Your wallet private key
    },
  },
};
