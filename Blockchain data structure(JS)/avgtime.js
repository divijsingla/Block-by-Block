const Blockchain = require("./blockchain");
const blockchain = new Blockchain();

blockchain.addBlock({ data: "new data" });
console.log(blockchain.chain[blockchain.chain.length - 1]);
let prevTimestamp, nextTimestamp, nextBlock, timeDiff, averageTime;

// Here we see that in using crypto-hash if we use binary hash then the difficulty is increased very well as hex when converted to binary contains many zeroes in the beggining, so to increase the zeroes it is easy...
// if we use simple hex code without binary, then it takes a VERRRY long time to pickup an avg time of even 1s. pehle 1000 blocks me 600-700ms tk hi touch kar payega..

const times = [];

for (let i = 0; i < 1000; i++) {
  prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;

  blockchain.addBlock({ data: `block ${i}` });
  nextBlock = blockchain.chain[blockchain.chain.length - 1];
  nextTimestamp = nextBlock.timestamp;

  timeDiff = nextTimestamp - prevTimestamp;

  times.push(timeDiff);

  averageTime = times.reduce((total, num) => total + num) / times.length;

  console.log(
    `Time to mine block :${timeDiff}ms,Difficulty:${nextBlock.difficulty},Average time:${averageTime}ms`
  );
}