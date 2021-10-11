const { ethers } = require("hardhat");

async function main() {
	const MyContract = await ethers.getContractFactory("MyContract");
	const myContract = await MyContract.deploy("My Contract");

	console.log(`My Contract deploy to : ${myContract.address}`);
}

main()
	.then(() => process.exit(0))
	.catch((err => {
		console.log(err);
		process.exit(1);
	}))