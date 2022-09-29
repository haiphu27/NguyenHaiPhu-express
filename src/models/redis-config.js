const redis = require("redis");
const util = require("util");

const config = redis.createClient({
    host: process.env.HOST_REDIS,
    port: process.env.PORT_REDIS,
    options: {},
    maxConnections: 30
});

const get = util.promisify(config.get).bind(config);
const set = util.promisify(config.set).bind(config);

module.exports = {config,get, set};
