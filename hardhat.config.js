require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.RINKEBY_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
