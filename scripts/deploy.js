
const hre = require("hardhat");

async function main() {
    const SoulBoundToken = await hre.ethers.getContractFactory("SoulBoundToken");
    const sbt = await SoulBoundToken.deploy();

    await sbt.waitForDeployment();

    console.log("SoulBoundToken deployed to:", sbt.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
