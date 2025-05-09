const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });

client.connect();

/**
 * Checks if the IP address has exceeded the rate limit.
 * @param {string} ip - The IP address of the user making the request
 * @throws Will throw an error if the rate limit is exceeded
 */
const checkRateLimit = async (ip) => {
    const key = `rate_limit:${ip}`;
    const limit = parseInt(process.env.RATE_LIMIT, 10) || 10;

    const current = await client.incr(key);

    if (current === 1) {
        // Set TTL only when key is first created
        await client.expire(key, 60);
    }

    if (current > limit) {
        throw new Error('Rate limit exceeded');
    }
};

module.exports = { checkRateLimit };

