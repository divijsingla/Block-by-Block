const {GENESIS_DATA, mineRate}= require('./config')
const cryptohash = require('./crypto-hash')
const hexToBinary = require('hex-to-binary') 
class block{
    constructor({timestamp,prevhash,hash,data,nonce,difficulty}){
        this.timestamp=timestamp
        this.prevhash=prevhash
        this.data=data
        this.hash=hash
        this.nonce=nonce
        this.difficulty=difficulty
    }

    static genesis(){
        return new block(GENESIS_DATA);
    } //so that its created once, not for every object and remains in assosiated with class, not objects

    static mineBlock({prevBlock,data}){
        let timestamp,hash;
        const prevhash= prevBlock.hash;
        let difficulty=prevBlock.difficulty
        let nonce =0;
        do{
            timestamp=Date.now()

            difficulty=block.adjustDifficulty(prevBlock,timestamp);
            hash=cryptohash(timestamp,prevhash,data,nonce,difficulty)
            nonce++;
        } while(hash.substring(0,difficulty)!=='0'.repeat(difficulty));

        console.log(difficulty,timestamp-prevBlock.timestamp)
        return new block({
            timestamp: timestamp,
            prevhash: prevhash,
            data:data,
            hash:hash, //in no particular order as we are sorting the inputs anyway
            nonce:nonce-1,
            difficulty:difficulty

        })

    }
    static adjustDifficulty(originalBlock,timestamp){
        const{difficulty}=originalBlock;
        const difference = timestamp-originalBlock.timestamp;
        
        if(difference<mineRate) return difficulty+1;
        if(difficulty<=1) return difficulty;
        else return difficulty-1;
    }

}

module.exports=block;

 











