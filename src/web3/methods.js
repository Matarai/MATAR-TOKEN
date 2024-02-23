import { ethers } from "ethers";
import { contractAbi } from "./contractAbi";

const contractAddress = "0xb3c164d6c21509E6370138Bf9eC72b8e3E95245d"

const provider = new ethers.providers.Web3Provider(window.ethereum);
export const getChainContracts = async () => {
    try {
        const contract = new ethers.Contract(contractAddress, contractAbi, provider);
        return contract;
    } catch (error) {
        console.error("Error in getChainContracts", error);
    }
}

// getter functions

export const getNewEthRaised = async () => {
    try {
        const contract = await getChainContracts();
        const newEthRaised = await contract.EthRaised();
        return newEthRaised;
    } catch (error) {
        console.error("Error in getNewEthRaised", error);
    }
}

export const getCurrentRound = async () => {
    try {
        const contract = await getChainContracts();
        const currentRound = await contract.currentRound();
        return currentRound;
    } catch (error) {
        console.error("Error in getCurrentRound", error);
    }
}

export const getownerAddress = async () => {
    try {
        const contract = await getChainContracts();
        const ownerAddress = await contract.owner();
        return ownerAddress;
    } catch (error) {
        console.error("Error in getownerAddress", error);
    }
}

export const getRounds = async (inputRound) => {
    try {
        const contract = await getChainContracts();
        const rounds = await contract.rounds(inputRound);
        return rounds;
    } catch (error) {
        console.error("Error in getRounds", error);
    }
}