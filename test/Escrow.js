const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Escrow", () => {
  it("saves the addresses", async () => {
    // Deploy real estate
    const RealEstate = await ethers.getContractFactory("RealEstate");
    const realEstate = await RealEstate.deploy();

    // Mint function
    let transaction = await realEstate.mint(
      "https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB/1.json"
    );
  });
});
