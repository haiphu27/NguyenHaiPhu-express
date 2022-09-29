const redisConfig = require("redis");

const config = redisConfig.createClient({
    host: process.env.HOST_REDIS,
    port: process.env.PORT_REDIS,
    options: {},
    maxConnections: 30
});


module.exports = config;
