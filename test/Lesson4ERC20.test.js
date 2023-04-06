const Lesson4ERC20 = artifacts.require('Lesson4ERC20');

contract('Lesson4ERC20', (account) => {
  it('MintNFT', async () => {
    const instance = await Lesson4ERC20.deployed();

    const name = await instance.name.call();

    assert.equal(name, 'Study Mintable NFT');
  });
});
