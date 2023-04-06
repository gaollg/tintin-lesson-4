const Lesson4ERC20 = artifacts.require('Lesson4ERC20');

contract('Lesson4ERC20', (accounts) => {
  console.log('Account', accounts.join('\n'));
  it('MintNFT', async () => {
    const instance = await Lesson4ERC20.deployed();

    const name = await instance.name.call();
    assert.equal(name, 'Study Mintable NFT');

    await instance.mint(accounts[1], 1000);
    //TODO 查账 accounts[1] 余额为 1000

    //TODO accounts[1] 转账 accounts[2] 1000，再查 accounts[1]==0 && accounts[2] == 998 && accounts[0]==1，并且销毁数量也是 1
    // instance.transferFrom(accounts[2])
  });
});
