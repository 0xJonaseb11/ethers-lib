const { ethers, EtherSymbol } = require("ethers");

const INFURA_ID ="";
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/${INFURA_ID}`);

const account1 = "0x1f334285efdbe58034d3f24dd0703672e0741f00"; //sender
const account2 = "etherscan_account_address"; // recipient

const privatekey1 = "sender's_private_key";
const wallet = new ethers.Wallet(privatekey1, provider);



const main = async () => {
    // shoe account 1 balance before transfer
    const senderBalanceBefore = await provider.getBalance(account1);
    // show account 2 balance before transfer
    const receiverBalanceBefore = await provider.getBalance(account2);

    // fetch
    console.log(`\nSender Balance Before: ${ethers.utils.formatEther(senderBalanceBefore)}`);
    console.log(`\nReceiver Balance Before: ${receiverBalanceBefore}`);
    
    // sent ether
    const tx = await wallet.sendTransaction({ to: account2, value: ethers.utils.parseEther("0.025")});
    
    // fetch tx after being mined
    await tx.wait();
    console.log(tx);
}
main();
