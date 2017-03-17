// connect to the database
const db = require('./db');

// add url to the database
exports.create = (payload, err, success) => {
  // create url/id - if there is an error- throw error
  db.url.create(payload).then(success).catch(err);
};

// display all urls in the database
exports.findAll = (payload, err, success) => {
  // find url- if there is an error- throw error
  db.url.findAll(payload).then(success).catch(err);
};

// find and display url by id
exports.find = (payload, err, success) => {
  db.url.find({
    // find using the id
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};

// find url based on shortened url
exports.go = (payload, err, success) => {
  db.url.find({
    where: {
      shortURL: payload.shortURL,
    },
  }).then(success).catch(err);
};

// update url based on id
exports.update = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
  }).then((url) => {
    // update url with any new data
    url.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// delete url by matching id
exports.delete = (payload, err, success) => {
  db.url.destroy({
    where: {
      // match id
      id: payload.id,
    },
  }).then(success).catch(err);
};
