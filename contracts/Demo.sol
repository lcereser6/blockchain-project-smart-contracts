// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.8;

//  test comment
contract Demo {
    event Echo(string message);

    function echo(string calldata message) external {
        emit Echo(message);
    }
}