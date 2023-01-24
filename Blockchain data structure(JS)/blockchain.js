const block =require('./block');
const cryptohash = require('./crypto-hash');

class blockchain{
    constructor(){
        this.chain = [block.genesis()] //created an array and put first elemet as genesis block
    }

    addBlock({data}){
        const newBlock=block.mineBlock({prevBlock: this.chain[this.chain.length-1],data:data})
        this.chain.push(newBlock);
    }
    
    static isValid(chain){

        if(JSON.stringify(chain[0])!==JSON.stringify(block.genesis())) {console.log(i,1);return false;}
        // const lastDifficulty=chain[chain.length-2].difficulty;
        for(let i =1;i<chain.length;i++){
            const {timestamp,prevhash,data,hash,nonce,difficulty} = chain[i];
            const realLastHash = chain[i-1].hash;

            const validatedHash=cryptohash(timestamp,prevhash,data,nonce,difficulty)
            
            if(prevhash!=realLastHash) {console.log(i,2);return false;}
            if(hash!=validatedHash) {console.log(i,3);return false;}

        }
        // const diff=lastDifficulty-chain[chain.length-1].difficulty;
        // if(Math.abs(diff)>1) return false; //for security reasons:: means aisa na ho jaye ki koi miner aake ekdam se difficulty ko badhane ya ghatane lage
        return true;

    }

    replaceChain(chain){
        if(chain<=this.chain.length){
            console.log('bigger available')
            return;
        }
        if(blockchain.isValid(chain)){
            this.chain=chain;
        }
    }


}

const myBlockchain = new blockchain();
myBlockchain.addBlock({data: 'Hi bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})
myBlockchain.addBlock({data: 'Bye bro'})

console.log(myBlockchain)
// console.log(blockchain.isValid(myBlockchain.chain))
module.exports=blockchain;