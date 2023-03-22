require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/gQcBx7dSmPYK0Tee6XWR97rhqj3LA6Vy',
      accounts: ['c5d7fe394186771801a7d679ea57b170445515c31624b647a51956d1abc65744'],
    },
  },
  paths: {
    artifacts: "./certify/src/artifacts",
  },
};
