require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.4",
    networks: {
        fuji: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            chainId: 43113,
            gasPrice: 225000000000,
            accounts: ["0xeaee9dc0faef6b62698088fd8be46fb656504d9fd80afcc146843829376939ef", // Organizer
                "cfd8eaf4b5e7c850b6567ed440ee5c3cb20061930d86e6115994b36274bb35fc"], // User / Minter
        }
    }
}
