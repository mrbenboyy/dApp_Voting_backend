const hardhat = require("hardhat");

async function main() {
  const [deployer] = await hardhat.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Define candidates for the voting contract
  const candidates = ["Alice", "Bob", "Charlie"];  // Example candidates

  // Get contract factory
  const Voting = await hardhat.ethers.getContractFactory("Voting");

  // Deploy contract and pass candidates as argument to constructor
  const voting = await Voting.deploy(candidates);
  await voting.waitForDeployment();
  console.log("Voting contract deployed to:", await voting.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
