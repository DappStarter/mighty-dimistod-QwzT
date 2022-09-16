require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name rate pizza pudding inflict pet suit gift'; 
let testAccounts = [
"0xdd39ac631aa46352db998a8acd92c83dfa8f997dc1c6bf8dc00e9d20a06c04ab",
"0x7c79efb40b7e1567e3a62e2d97bb024b2a92ea47c2af9cb7e7235339879c89e3",
"0x6f416a58c6256f823a893bbe31de44c2c4f8339f0ee980f449c9c380ed005bae",
"0x8edd2192dd7d1de2ff59632d4c69e2f90672121bd2937dcceae6e058b65d3f93",
"0x5927b135bfd199222c81689d06166edacd803053d118879d1ae01387fe9faf15",
"0x8f3e230eeac7d44abe4e63f95c9ab534032e1e8dc48a147fcccf47cd4d409d8a",
"0x4e04913cd0a4cdfb899e80b3075781d6d0991a6a851ef345a5c264bb47b2c33f",
"0xf8f53b10a7a78f5def2d1bf450e81247b548b0380b9fcd95da536200195547ab",
"0x0d5a6dd69d9bfa3f67d15e399e4e5c63ea221190be00e459c189bfd76a88c03e",
"0x57065ed615f4f8dfadae24cda8ff8a012bd55e9966780770da0294be318f873b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

