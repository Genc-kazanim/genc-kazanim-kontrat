const hre = require("hardhat");

async function main() {
    const contractAddress = "0x588cFB4c05d9Aec892813cfc2988BB997851a517";
    const accountToAdd = "0x56DAcB9C47D08e40f1F037A326aa41138865D244";

    // Getting the contract instance
    const SoulBoundToken = await hre.ethers.getContractFactory("SoulBoundToken");
    const sbt = await SoulBoundToken.attach(contractAddress);

    // Adding an address to the whitelist
    const tx = await sbt.addToWhitelist([accountToAdd]);
    await tx.wait();

    console.log(`Address ${accountToAdd} has been added to the whitelist.`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
