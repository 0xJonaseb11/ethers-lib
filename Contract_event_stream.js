const { ethers, EtherSymbol, ContractFactory } = require("ethers");

const INFURA_ID = "";
// const provider = new ethers.providers.JsonRpcProvider( `https://mainnet.infura.io/${INFURA_ID}`);

const ERC20_ABI = [
    "function name() view returns(String)",
    "function symbol() view returns(String)",
    "function totalSupply() view returns(uint256)",
    "function balanceOf(address) view returns(uint)", 
    
    "event TransformStream(address indexed fromTwos, address indexed toString, uint amount)"
];

const address = "DAI_Contract_address";
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    const transferEvents = contract.queryFilter("Transfer");
    console.log(transferEvents);

}
main();