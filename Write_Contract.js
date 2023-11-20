const { ethers, EtherSymbol, ContractFactory } = require("ethers");

const INFURA_ID = "";
// const provider = new ethers.providers.JsonRpcProvider( `https://mainnet.infura.io/${INFURA_ID}`);
const provider = new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/${INFURA_ID}`
    );
   
const account1 = "";
const account2 = "";

const privatekey1 = "";
const wallet = new ethers.Wallet(privatekey1, provider);

const main = async () => {

}
main();