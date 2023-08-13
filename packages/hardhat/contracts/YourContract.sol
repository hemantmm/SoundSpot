//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract YourContract is Ownable,ERC721{
using SafeMath for uint256;
    struct Song{
        uint256 songId;
        address uploader;
        string songURI;
        bool isApproved;
    }

struct LoyaltyReward{
    uint256 rewardId;
    uint256 requiredPoints;
    string rewardType;
}

    Song[] public songs;

    mapping(address=>bool) public verifiedUsers;
    mapping(address => bool) public subscribedUsers;
    mapping(address=>uint256) public loyaltyPoints;
    mapping(address=>uint256[]) public userNFTs;

    LoyaltyReward[] public loyaltyRewards;

    uint256 public subscriptionPrice=0.1 ether;

    modifier onlyVerifiedUser(){
        require(verifiedUsers[msg.sender],"Only verified can users can access this");
        _;
    }

    modifier onlySubscribedUser(){
        require(subscribedUsers[msg.sender],"Only subscribed users can access this.");
        _;
    }

    constructor(string memory _name,string memory _symbol) ERC721(_name,_symbol){}

    event SongUploaded(uint256 songId,address indexed uploader,string songURI);
    event LoyaltyRewardClaimed(address indexed user,uint256 rewardId,string rewardType);

    function subscribe() external payable{
        require(msg.value==subscriptionPrice,"Incorrect subscription price");
        subscribedUsers[msg.sender]=true;
    }

    function uploadSong(string memory _songURI) external onlyVerifiedUser{
        songs.push(Song({songId:songs.length,uploader:msg.sender,songURI:_songURI,isApproved:false}));
        emit SongUploaded(songs.length-1,msg.sender,_songURI);
    }

    function approveSong(uint256 _songId) external onlyOwner{
        require(_songId<songs.length,"Invalid song ID");
        songs[_songId].isApproved=true;
    }

    function addLoyaltyReward(uint256 _requiredPoints, string memory _rewardType) external onlyOwner {
        loyaltyRewards.push(LoyaltyReward({ rewardId: loyaltyRewards.length, requiredPoints: _requiredPoints, rewardType: _rewardType }));
    }

    function claimLoyaltyReward(uint256 _rewardId) external onlySubscribedUser {
        require(_rewardId < loyaltyRewards.length, "Invalid reward ID");
        require(loyaltyPoints[msg.sender] >= loyaltyRewards[_rewardId].requiredPoints, "Insufficient loyalty points");

        _mint(msg.sender, userNFTs[msg.sender].length);
        userNFTs[msg.sender].push(userNFTs[msg.sender].length);
        loyaltyPoints[msg.sender] = loyaltyPoints[msg.sender] - loyaltyRewards[_rewardId].requiredPoints;

        emit LoyaltyRewardClaimed(msg.sender, _rewardId, loyaltyRewards[_rewardId].rewardType);
    }

    function addLoyaltyPoints(address _user, uint256 _points) public onlyOwner {
        loyaltyPoints[_user] += _points;
    }

     function verifyUser(address _user) public onlyOwner {
        verifiedUsers[_user] = true;
    }


}


