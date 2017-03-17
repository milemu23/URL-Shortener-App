// routes for url
// import generator code
const generator = require('../../../modules/generator');
// import test data
const url = require('../../../models/url');
const util = require('../../../modules/utility-tool.js');

module.exports = (express) => {
  const router = express.Router();

// generate short url
  router.post('/urls', (req, res) => {
    req.body.shortURL = generator.generate();
    util.debug('Problem is ahead more... ', req.body.shortURL, 'warn');
    url.create(req.body, (err) => {
    // error code
      util.debug('Boo! You failed!', err, 'error');
      res.status(500).json(err);
    }, (url) => {
      // success code
      util.debug('Hooray! Shorturl created! ', url.shortURL, 'success');
      res.status(200).json(url);
    });
  });

  // get all urls
  router.get('/urls', (req, res) => {
    url.findAll(req.body, (err) => {
      util.debug('We didn\'t get \'em all!!', err, 'error');
      res.status(500).json(err);
    }, (url) => {
      util.debug('We got \'em all!!', url, 'success');
      res.status(200).json(url);
    });
  });

  // get single url
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      util.debug('You can\'t even get one!', err, 'error');
      res.status(500).json(err);
    }, (url) => {
      util.debug('Just a single one... ', url, 'success');
      res.status(200).json(url);
    });
  });

  // update a url
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      util.debug('Try again...', err, 'error');
      res.status(500).json(err);
    }, (url) => {
      util.debug('You did it! The new url is: ', url.original, 'success');
      res.status(200).json(url);
    });
  });

  // delete url
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.delete(req.body, (err) => {
      util.debug('Only a magician can make something disappear.', err, 'error');
      res.status(500).json(err);
    }, (url) => {
      util.debug('Gone forever.', url, 'success', '/urls/:id');
      res.status(200).json(url);
    });
  });

  // redirect to shortened url
  router.get('/go/:shortURL', (req, res) => {
    req.body.shortURL = req.params.shortURL;
    util.debug('Problem is ahead more... ', req.body.shortURL, 'warn');
    url.go(req.body, (err) => {
      util.debug('Something went wrong.', err, 'error');
      res.status(500).json(err);
    }, (url) => {
      util.debug('Redirecitng to...', url.original, 'success');
      res.status(200);
      res.redirect(url.original);
    });
  });

  return router;
};
