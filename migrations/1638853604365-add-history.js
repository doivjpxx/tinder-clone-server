'use strict'

const Bluebird = require('bluebird');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
Bluebird.promisifyAll(MongoClient);
const url = 'mongodb://localhost:27017/ddd';

const data = require('../seeders/history');

module.exports.up = function (next) {
  let mClient = null

  return MongoClient.connect(url)
    .then(client => {
      mClient = client
      return client.db()
    })
    .then(async (db) => {
      const user = db.collection('matches');
      await user.insertMany(data.map(d => ({ ...d, createdAt: new Date(), updatedAt: new Date() })));
    })
    .then(() => {
      mClient.close();
    });
}

module.exports.down = function (next) {
  let mClient = null
  return MongoClient.connect(url)
    .then(client => {
      mClient = client
      return client.db()
    })
    .then(db => {
      db.collection('matches').deleteMany();
    })
    .then(() => {
      mClient.close();
    });
}
