const { ethers, Transaction }  = require("ethers");
const INFURA_ID = "";

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/${INFURA_ID}`);

const main = async () => {
    const block = await provider.getBlockNumber();

    console.log(`\nBlock Number: ${block}`);

    const blockInfo = await provider.getBlock(block);

    console.log(`BlockInfo : ${blockInfo}`);

    // getting overall txs
    const { transactions } = await provider.getBlockWithTransactions(block);
    
    // log them to console
    console.log(`'nLogging first transaction in block: \n`);
    console.log(transactions[0]);
}
main();