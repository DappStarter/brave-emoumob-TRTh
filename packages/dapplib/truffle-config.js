require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stone repeat saddle pumpkin hunt bag army gasp'; 
let testAccounts = [
"0x285761afb888ae306fd52d1e1102777873075326209f51894193982822a02b31",
"0x04618114cca6f9d8fc4a06c3d1588fba046d33c77ce7357c84aba1644af47c6e",
"0xc9a9ab918edea474d6cab1d3648acf408e567eab1b27d5eb917fc5ee30d7e9ea",
"0x4eff397610d1d60a750b8752c30f8e1158f350f76d0a2a0c6ee342cd154cc738",
"0xe78545d605ce37c95f2b5c0bbdc9fa132927133c67fb6bbc26af27305e864762",
"0xafa7fecb7f8fe44097fb5027cccfe2cd53c1381dd34b85ee1d3b54ebc837fce0",
"0x9991983ecf6f897d8d7d247e7f64d3cb75b098c8e0b67482c0a5fc385e19c749",
"0x70b98e3dd2f534b78ef7ef0f73458bf7f6d33d4a4080feebb7f4b61161c1eb18",
"0xda9bbbc9dd8a25d2a10f42f9d04762d5f104dfb8ac2b4c793bdd869b04dc2543",
"0x02ec0d58af29fe7ddcd523121c8f01c3ce83a7e67f4cdd3bec6b8a9f9a7479f9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

