const winston = require('winston');
const { combine, timestamp, label, prettyPrint } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        label({ label: 'auth' }),
        timestamp(),
        prettyPrint()
      ),
    defaultMeta: { service: 'auth-service' },
    transports: [
        new winston.transports.Console(),
    ]
});

module.exports = logger;