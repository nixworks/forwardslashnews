// main entry point. Load the server from here. 
const dotenv = require('dotenv');
const config = require('./server/config/config');
const app = require('./server/server');
const chalk = require('chalk');

app.listen(config.port, () => {
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), config.port, app.get('env'));
});


