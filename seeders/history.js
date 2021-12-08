const currentUserRecId = 1;

const data = [
  {
    userRecId: currentUserRecId,
    action: 1,
    matchWith: 5,
  },
  {
    userRecId: currentUserRecId,
    action: 1,
    matchWith: 12,
  },
  {
    userRecId: currentUserRecId,
    action: 1,
    matchWith: 25,
  },
  {
    userRecId: currentUserRecId,
    action: 1,
    matchWith: 31,
  },
  {
    userRecId: currentUserRecId,
    action: 1,
    matchWith: 7,
  },
  {
    userRecId: currentUserRecId,
    action: 1,
    matchWith: 65,
  },
  {
    userRecId: currentUserRecId,
    action: 1,
    matchWith: 89,
  },
  {
    userRecId: currentUserRecId,
    action: 1,
    matchWith: 44,
  },
];

module.exports = data.map((d, idx) => ({ ...d, recId: idx }));
