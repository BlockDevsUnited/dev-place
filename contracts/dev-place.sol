// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */

abstract contract ERC20 {
    function balanceOf(address who) public virtual view returns (uint256);
    function transfer(address to, uint256 value) public virtual returns (bool);
    function transferFrom(address from, address to, uint256 value) public virtual returns (bool);

}

contract devplace {


    address public devcash;
    address public owner;

    address public feeRecipient;

    uint fee;

    event placed(uint x,uint y, string colour);
    event feeChanged(uint newFee);

    constructor(address _devcash) {
        devcash = _devcash;
        fee = 1000000000;
        owner = msg.sender;
        feeRecipient = msg.sender;
    }

    function changeFee(uint _fee) public {
        require(msg.sender==owner);
        fee = _fee;
        emit feeChanged(fee);
    }

    function changefeeRecipient(address _feeRecipient) public {
        require(msg.sender==owner);
        feeRecipient = _feeRecipient;
    }

    function changeOwner(address _owner) public {
        require(msg.sender==owner);
        owner = _owner;
    }

    function place(uint x, uint y, string memory colour) public{
        ERC20(devcash).transferFrom(msg.sender, feeRecipient,fee);
        emit placed(x,y,colour);
    }
}
