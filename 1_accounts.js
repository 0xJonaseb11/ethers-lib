const { ethers } = require("ethers");
// const INFURA_ID = process.env.API_KEY_SECRET;
// console.log(INFURA_ID);

// // use Infura node

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/${INFURA_ID}`
 );

const address = "0x1F334285EfdbE58034d3F24DD0703672E0741f00";

const main = async () => {
  // get balance for address
  const balance = await provider.getBalance(address);
  console.log(balance);
  console.log(
    `\n ETH Balance of ${address} --> ${ethers.utils.formatEther(
      balance)} ETH\N `
  );
};
main();
