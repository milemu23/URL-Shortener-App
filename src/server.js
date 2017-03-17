const express = require('express');
const bodyParser = require('body-parser');
const util = require('munk-tool');
// new instance of express
const app = express();

app.use(bodyParser.json());
// see data from headers
app.use(bodyParser.urlencoded({
  extended: true,
}));

// require routes to use
app.use('/', require('./routes')(express));

// configuration
const port = process.env.PORT || 3000;
// export server to use with other modules
exports.server = app.listen(port, () => {
  util.debug('Server is using', port, 'success');
});
