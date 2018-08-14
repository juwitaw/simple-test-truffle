module.exports = {
   networks: {
    development: {
    host: process.env.DEVELOPMENT_HOST,
    port: 8545,
    network_id: "*"
    }
 },
 solc: {
  optimizer: {
    enabled: true,
    runs: 200
    }
  },
};
