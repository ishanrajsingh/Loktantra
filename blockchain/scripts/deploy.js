async function main() {
  // Get the contract factory
  const Loktantra = await ethers.getContractFactory("Loktantra");
  
  // Deploy contract (ethers v6 style)
  const loktantra = await Loktantra.deploy(); // returns the deployed contract immediately
  
  console.log("Loktantra deployed to:", loktantra.target || loktantra.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
