const hre = require("hardhat");

async function main() {
    const contractAddress = "0x588cFB4c05d9Aec892813cfc2988BB997851a517";

    // Get signers - the second signer is the whitelisted account
    const [deployer, whitelistedAccount] = await hre.ethers.getSigners();

    // Attach the contract using the whitelisted account
    const SoulBoundToken = await hre.ethers.getContractFactory("SoulBoundToken", whitelistedAccount);
    const sbt = SoulBoundToken.attach(contractAddress);

    // Perform the minting action using the whitelisted account
    const tx = await sbt.claimToken();
    await tx.wait();

    console.log(`Token minted successfully.`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
