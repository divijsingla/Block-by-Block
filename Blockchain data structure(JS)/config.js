const cryptohash = require('./crypto-hash')
const mineRate=2000; //2s
const GENESIS_DATA={
    timestamp:Date.now(),
    prevhash:'0x00',
    data:'GenesisBlock',
    hash:cryptohash('GenesisBlock',this.timestamp),
    difficulty:2,
    nonce:0

}



module.exports={GENESIS_DATA,mineRate}