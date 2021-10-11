const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyContract", () => {
	it("should return its name", async () => {
		const MyContract = await ethers.getContractFactory("MyContract");
		const myContract = await MyContract.deploy("My Contract");

		await myContract.changeName("Another Contract");
		expect(await myContract.getName()).to.equal("Another Contract");
	});
});