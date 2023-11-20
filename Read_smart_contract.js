const { ethers, EtherSymbol } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider( `https://mainnet.infura.io/${INFURA_ID}`);
const address =  "0x1F334285EfdbE58034d3F24DD0703672E0741f00"; // DAI address

const ERC20_ABI = [
    "function name() view returns(String)",
    "function symbol() view returns(String)",
    "function totalSupply() view returns(uint256)",
    "function balanceOf(address) view returns(uint)", 
]

const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    //neet to set instances [new keyword]


}
main();