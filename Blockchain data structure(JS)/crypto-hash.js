const crypto = require('crypto');
const hexToBinary = require('hex-to-binary') 

const cryptohash=(...inputs)=>{
    const hash= crypto.createHash('sha256') //This method creates and returns a hash object that can be used to generate a hash (also known as a digest) of data using the specified algorithm. The algorithm parameter is a string that specifies the hash algorithm to use, such as 'sha256', 'md5', etc.

    hash.update(inputs.sort().join('')) //In JavaScript, the update method is a method of the Hash object, which is a class provided by the crypto library that represents a hash (also known as a digest) of data. The update method is used to add data to the hash object, which will be included in the final hash when it is generated. We can run update multiple times to add data..

    return (hash.digest("hex")) //The digest method is a method of the Hash object, which is a class provided by the crypto library that represents a hash (also known as a digest) of data. The digest method is used to generate the final hash of the data that has been added to the hash object using the update method
    // The digest method takes an optional parameter, which is a string that specifies the encoding to use for the final hash. Valid encoding options include 'hex', 'base64', and 'latin1'. If no encoding is specified, the digest method will return the final hash as a buffer.
    //Note that once the digest method has been called, the hash object is no longer usable and any further calls to the update method will have no effect. If you need to add more data to the hash, you will need to create a new hash object.
} 

module.exports=cryptohash;

