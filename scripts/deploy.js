// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
let maxWhitelist = 10;

  const whitelist_contract = await hre.ethers.getContractFactory("Whitelist");
  const deploy_whitelist_contract = await whitelist_contract.deploy(maxWhitelist);

  await deploy_whitelist_contract.deployed();

  console.log("Whitelist Contract Address:", deploy_whitelist_contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
