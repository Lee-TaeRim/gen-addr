const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));

// id보다 user 고유번호가 좋을듯
var id = "dpfxldkf95";
var salt = "freemeta-aftmarket";

console.log("Keccak256 input : " + id + salt);

// Keccak-256
var sha3 = web3.utils.sha3((id+salt));

console.log("Keccak256 result : " + sha3);

var accounts = web3.eth.accounts.privateKeyToAccount(sha3);

console.log("address : " + accounts.address);
