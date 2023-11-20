const { ethers }  = require("ethers");
const INFURA_ID = "";

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/${INFURA_ID}`);

const main = async () => {
    const block = await provider.getBlockNumber();

    console.log(`\nBlock Number: ${block}`);

    const blockInfo = await provider.getBlock(block);

    console.log(`BlockInfo : ${blockInfo}`);
}
main();