// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SoulBoundToken is ERC721, Ownable {
    mapping(address => bool) private _whitelisted;
    mapping(address => bool) private _claimed;
    uint256 private _tokenIdCounter;

    constructor() ERC721("SoulBoundToken", "SBT") {}

    function addToWhitelist(address[] calldata accounts) public onlyOwner {
        for(uint i = 0; i < accounts.length; i++) {
            _whitelisted[accounts[i]] = true;
        }
    }

    function claimToken() public {
        require(_whitelisted[msg.sender], "Address not whitelisted");
        require(!_claimed[msg.sender], "Token already claimed");

        uint256 tokenId = _tokenIdCounter++;
        _safeMint(msg.sender, tokenId);
        _claimed[msg.sender] = true;
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override {
        require(from == address(0), "SBT: transfer not allowed");
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function tokenURI(uint256 tokenId) public pure override returns (string memory) {
        return "https://example.com/token/";
    }
}
