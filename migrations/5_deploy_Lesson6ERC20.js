const Lesson6ERC20 = artifacts.require('Lesson6ERC20');

module.exports = function (deployer) {
  deployer.deploy(Lesson6ERC20, 'Lesson6 TinTin Mintable NFT', '6thTin');
};
