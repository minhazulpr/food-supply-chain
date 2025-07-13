import web3package from "web3";
import {contractAddress, contractABI} from "./config";

export let state = {
    accounts: "",
    web3: "",
    contract: "",
};

// Create a Promise that resolves when Web3 is ready
export const Web3 = new Promise(async (resolve, reject) => {
    window.addEventListener('load', async () => {
        if (window.ethereum) {
            try {
                let web3 = new web3package(window.ethereum);
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                let accounts = await web3.eth.getAccounts();

                state.web3 = web3;
                state.accounts = accounts;
                state.contract = new web3.eth.Contract(contractABI, contractAddress);

                resolve(state);  
            } catch (err) {
                reject("Web3 initialization failed: " + err.message);
            }
        } else {
            reject("MetaMask not installed!");
        }
    });
});