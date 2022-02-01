require("@nomiclabs/hardhat-waffle");
const fs = require(fs);
const privateKey = fs.readFileSync(".secret").toString()

const projectId = "MyGT3Rn9PLsMZ0pn56TukLLbi6EnWpRS"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectID}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
