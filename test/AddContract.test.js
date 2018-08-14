const AddContract = artifacts.require('AddContract');

contract('AddContract', accounts => {
  let contract;
  const owner1 = accounts[0];

  beforeEach(async function () {
    contract = await AddContract.new( { from: owner1 } );
  });

  it('has 1 owner and the owner is the deployer', async function () {
    const total = await contract.addTotal(1);
    assert.strictEqual(Number(total.logs[0].args.total.valueOf()), 1);
  });
});