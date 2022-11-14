//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.17;
contract Whitelist {
      // Max number of whitelisted addresses allowed
    uint8 public maxWhitelistedAddresses;
    mapping (address => bool) public whitelistedAddresses;
    uint8 public numAddressesWhitelisted;

    constructor (uint8  maxWhitelistedAddressesconstructor){
        maxWhitelistedAddresses = maxWhitelistedAddressesconstructor;
    }
    function addAddressToWhitelist () public{
        require(!(whitelistedAddresses[msg.sender]), "sorry user already in the whitelist");
        require(numAddressesWhitelisted < maxWhitelistedAddresses, "Sorry bro you missed out we're all out of whitelist spots");
        numAddressesWhitelisted+=1;
        whitelistedAddresses[msg.sender] = true;

    } 
}