const Redis = require('redis')


var RedisClient = Redis.createClient({

    retry_strategy: function (options) {

        if (options.error && options.error.code === 'ECONNREFUSED') {

            return new Error('The server refused the connection');

        }

        if (options.total_retry_time > 1000 * 60 * 60) {

            return new Error('Retry time exhausted');

        }

        if (options.attempt > 10) {

            return undefined;

        }

        return Math.min(options.attempt * 100, 3000);

    }
}
);


module.exports = RedisClient ;