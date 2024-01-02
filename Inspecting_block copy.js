const { ethers, Transaction } = require("ethers");
const INFURA_ID = '';

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/${INFURA_ID}`);

const main = async () => {
    const block = await provider.getBlockNumber();

    console.log(`\n BLock Number: ${block}`);

    const blockInfo = await provider.getBlock(block);

    console.log(`\n Block Info: ${blockInfo}`);

    // getting overall txs
    const { transactions } = await provider.getBlockWithTransactions(block);

    // to the console
    console.log(`\n Logging first transaction in block: \n`);
    console.log(transactions([0]);
}