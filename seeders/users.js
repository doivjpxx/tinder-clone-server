const faker = require('faker');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const sampleUsersCount = 100;
const insertData = [];

for (let i = 1; i <= sampleUsersCount; i++) {
  const randGender = Math.round(Math.random() * 10) % 2;

  insertData.push({
    firstName: faker.name.firstName(randGender),
    recId: i + 1,
    age: getRandomInt(18, 30),
    lastName: faker.name.lastName(randGender),
    dateOfBirth: faker.datatype.datetime({ min: 315532800000, max: 946684800000 }),
    avatar: faker.image.avatar(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

module.exports = insertData;
