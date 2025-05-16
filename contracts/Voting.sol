// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
contract Voting {
    struct Candidate {
        string name;
        string imageCID;
        uint voteCount;
    }
    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted;
    uint public candidatesCount;
    address public owner;
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    constructor() {
        owner = msg.sender;
    }
    function addCandidate(
        string memory _name,
        string memory _imageCID
    ) public onlyOwner {
        candidates[candidatesCount] = Candidate(_name, _imageCID, 0);
        candidatesCount++;
    }
    function vote(uint _candidateId) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(_candidateId < candidatesCount, "Invalid candidate ID");
        hasVoted[msg.sender] = true;
        candidates[_candidateId].voteCount++;
    }
}
