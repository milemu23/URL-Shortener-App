// set available chracters
const base = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789_-';
const limit = 8;

// create function to generate random characters
function generateShortUrl() {
  const shortURL = '';
  for (const i = 0; i < limit; i++) {
    shortURL += base.charAt(Math.floor(Math.random() * base.length));
  }
  return shortURL;
}

module.exports.generate = generateShortUrl;
