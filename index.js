const { PORT } = require('./config');
const log = require('./lib/log');

require('./server').listen(PORT, () => {
  log.info('Server started 🚀');
  log.info(`Listening on ${PORT}`);
});
