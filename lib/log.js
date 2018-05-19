const pino = require('pino');
const { NODE_ENV } = require('../config');

const logLevel = NODE_ENV === 'test' ? 'silent' : 'info';
const shoudPrettyPrint = NODE_ENV !== 'production';

const log = pino({
  name: 'pyb-server',
  serializers: pino.stdSerializers,
  level: logLevel,
  prettyPrint: shoudPrettyPrint,
});

module.exports = log;
