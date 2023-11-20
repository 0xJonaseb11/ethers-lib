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

const ERC20_ABI = [
    "function balance(address) view returns(uint)",;
    "function transfer(address to, uint amount) returns(bool)",
]
const address = "Chainlink_token_address";
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {

    const balance = await contract.balanceOf(account1);
    
    console.log(`\n Reading from: ${address}`);
    console.log(`Balance of sender: ${balance}`);

    // connect to wallet
    const contractWithWallet = contract.connect(wallet);
    const tx = contractWithWallet.transfer(account1, balance);
    // wait fot tx to be mined
    await tx.wait();
}
main();