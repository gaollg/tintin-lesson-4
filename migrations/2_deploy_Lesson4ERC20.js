const Lesson4ERC20 = artifacts.require('Lesson4ERC20');

module.exports = function (deployer) {
  deployer.deploy(Lesson4ERC20, 'Study Mintable NFT', 'sNFT');
};
