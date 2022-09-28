const redis = require("redis");

module.exports=async function cache(req, res, next) {
    const key = req.route.path.split('/')[1];
    const client=redis.createClient();
    await client.connect();
    const value= await client.get(key);
    if(value!==null) {
        return res.json(JSON.parse(value));
    }else {
        next()
    }
}