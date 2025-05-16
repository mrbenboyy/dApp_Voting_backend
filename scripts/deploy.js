const { ethers } = require("hardhat");
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);
  const Voting = await ethers.getContractFactory("Voting");
  const contract = await Voting.deploy();
  await contract.waitForDeployment();
  const address = await contract.getAddress();
  console.log("Contract deployed at:", address);
  // Ajouter les candidats ici
  const tx1 = await contract.addCandidate("Said", "QmaQtQpFmHbyk5s5YL4ARjnxTkFBV9tk2BWUvXHV1KEKpv");
  await tx1.wait();
  const tx2 = await contract.addCandidate("Ahmed", "QmaQtQpFmHbyk5s5YL4ARjnxTkFBV9tk2BWUvXHV1KEKpv");
  await tx2.wait();
  console.log("Candidats ajoutés : Ahmed, Said");
}
main().catch((error) => {
  console.error("Erreur :", error);
  process.exit(1);
});
