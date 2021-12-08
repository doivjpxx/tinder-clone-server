'use strict'

const Bluebird = require('bluebird');
const mongodb = require('mongodb');
const faker = require('faker');

const MongoClient = mongodb.MongoClient;
Bluebird.promisifyAll(MongoClient);
const url = 'mongodb://localhost:27017/tinder_clone_db';

const users = require('../seeders/users');

module.exports.up = function (next) {
  let mClient = null

  return MongoClient.connect(url)
    .then(client => {
      mClient = client
      return client.db()
    })
    .then(async (db) => {
      const user = db.collection('users');
      await user.insertOne({
        _id: mongodb.ObjectId("61b0da347bff44992fbc3d98"),
        firstName: 'Huy',
        lastName: 'Phong',
        age: 23,
        recId: 1,
        dateOfBirth: new Date(new Date().setFullYear(1997, 9, 24)),
        avatar: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      await user.insertMany(users);
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
      await db.collection('users').deleteMany();
    })
    .then(() => {
      mClient.close();
    });
}
