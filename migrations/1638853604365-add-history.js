'use strict'

const Bluebird = require('bluebird');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
Bluebird.promisifyAll(MongoClient);
const url = 'mongodb://localhost:27017/tinder_clone_db';

const data = require('../seeders/history');

module.exports.up = function (next) {
  let mClient = null

  return MongoClient.connect(url)
    .then(client => {
      mClient = client
      return client.db()
    })
    .then(async (db) => {
      const match = db.collection('matches');
      await match.insertMany(await Promise.all(data.map(async (d) => ({ ...d, createdAt: new Date(), updatedAt: new Date() }))));
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
    .then(async (db) => {
      await db.collection('matches').deleteMany();
    })
    .then(() => {
      mClient.close();
    });
}
