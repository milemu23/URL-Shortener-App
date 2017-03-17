const expect = require('chai').expect;
const url = require('../src/models/url');
const util = require('../src/modules/utility-tool.js');

const testUrl = {};

describe('URLS', () => {
  // run before each test
  beforeEach(() => {
    const mockUrl = {
      original: 'http://www.google.com',
      shortURL: '4xD011-9',
    };

    url.create(mockUrl, (err) => {
      util.debug('Error!! Cannot create URL.', err, 'error');
    }, (newUrl) => {
      testUrl = newUrl;
    });
  });

  it('Should be able to create new url', () => {
    expect(testUrl.id).to.not.be.null;
  });

  it('Should display all URLs', (done) => {
    url.findAll({}, (err) => {
      util.debug('Error!! Cannot get all URLs.', err, 'error');
    }, (allUrls) => {
      expect(allUrls.length).to.be.above(0);
      done();
    });
  });
  it('Should display one URL', (done) => {
    url.find(testUrl, (err) => {
      util.debug('Error!! Cannot get that URL.', err, 'error');
    }, (url) => {
      expect(url.id).to.be.equal(testUrl.id);
      done();
    });
  });

  // it('Should update the shorturl ', (done) => {
  //   const updateUrl = {
  //     id: testUrl.id,
  //     shortURL: 'it-works',
  //   };
  //   url.update(updateUrl, (err) => util.debug('Url did not update.', err, 'error'),
  // (updatedNewUrl) => {
  //   expect(updatedNewUrl.shortURL).to.be.equal(updateUrl.shortURL);
  //   testUrl = updatedNewUrl;
  //   done();
  // });
  // });
//   it('Should be able to delete url ', (done) => {
//     url.delete(testUrl, (err) => util.debug('Url did not delete.', err, 'error'),
//   (deleteRes) => {
//     expect(deleteRes).to.be.equal(1);
//     done();
//   });
// });
});
