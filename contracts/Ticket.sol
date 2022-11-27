// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract TicketNFT is ERC1155 {
    uint256 public constant TICKET = 1;
    address public owner;
    string baseUri;

    constructor(string memory _uri, uint256 _volume) ERC1155(_uri) {
        owner = msg.sender;
        baseUri = _uri;
        _mint(msg.sender, TICKET, _volume, "");
    }

    function uri(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(baseUri, Strings.toString(_tokenId), ".json")
            );
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public override {
        _safeTransferFrom(from, to, id, amount, data);
    }
}