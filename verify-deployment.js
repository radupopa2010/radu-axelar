require('dotenv').config();

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS_GATEWAY_PROXY = process.env.CONTRACT_ADDRESS_GATEWAY_PROXY;
const CONTRACT_PATH = process.env.CONTRACT_PATH;

const contract = require(CONTRACT_PATH);
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const contractAddressGatewayProxy = new ethers.Contract(CONTRACT_ADDRESS_GATEWAY_PROXY, contract.abi, signer);

async function main() {
	 const message = await contractAddressGatewayProxy.implementation();
   console.log("type of messge is " + typeof message);
   console.log("messge is " +  message);
	 console.log("The message is: " + JSON.stringify(message, null, 4));
}
main();


