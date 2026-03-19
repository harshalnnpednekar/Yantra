const hre = require("hardhat");

async function main() {
  console.log("Deploying Yantra Contracts...");

  // Deploy Token
  const YantraToken = await hre.ethers.getContractFactory("YantraToken");
  const token = await YantraToken.deploy(1000000); // 1M supply
  await token.waitForDeployment();
  console.log("YantraToken deployed to:", await token.getAddress());

  // Deploy Voting
  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(["Proposal 1", "Proposal 2", "Proposal 3"]);
  await voting.waitForDeployment();
  console.log("Voting deployed to:", await voting.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
