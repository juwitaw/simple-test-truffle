var AddContract = artifacts.require("AddContract");

module.exports = function(deployer) {
  deployer.deploy(AddContract);
};