const faker = require('faker');

const sampleUsersCount = 100;
const insertData = [{
  firstName: faker.name.firstName(1),
  lastName: faker.name.lastName(1),
  dateOfBirth: faker.datatype.datetime({ min: 315532800000, max: 946684800000 }),
  avatar: faker.image.avatar(),
}];

for (let i = 0; i < sampleUsersCount; i++) {
  const randGender = Math.round(Math.random() * 10) % 2;

  insertData.push({
    firstName: faker.name.firstName(randGender),
    index: i + 1,
    lastName: faker.name.lastName(randGender),
    dateOfBirth: faker.datatype.datetime({ min: 315532800000, max: 946684800000 }),
    avatar: faker.image.avatar(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

module.exports = insertData;
