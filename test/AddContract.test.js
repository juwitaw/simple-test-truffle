const AddContract = artifacts.require('AddContract');

contract('AddContract', accounts => {
  let contract;
  const owner1 = accounts[0];

  beforeEach(async function () {
    contract = await AddContract.new( { from: owner1 } );
  });

  it('deployed and storage is 0', async function () {
    const total = await contract.total();
    assert.strictEqual(Number(total), 0);
  });

  it('added 5 to total', async function () {
    const receipt = await contract.addTotal(5);
    const total = await contract.total();
    assert.strictEqual(Number(total), 5);
    assert.strictEqual(Number(receipt.logs[0].args.total.valueOf()), 1);
  });
});