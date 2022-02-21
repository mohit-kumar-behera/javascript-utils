const nestedArr = [
  1,
  2,
  3,
  [4, 5],
  6,
  [7, 8, 9, [10, 11, [12], 13], 14],
  15,
  [16, 17],
];

const nestedObj = {
  name: {
    firstName: 'Mohit',
    lastName: 'Kumar',
  },
  age: 21,
  address: {
    state: 'Odisha',
    country: {
      name: 'India',
      code: 'IN',
    },
    town: {
      detail: {
        name: 'Udayabhat',
        city: 'Paradeep',
        district: 'Jagatsinghpur',
        pin: 754142,
      },
      landmark: 'Near Hospital',
    },
  },
  phone: {
    home: '1234567890',
    office: '9087654321',
  },
};

module.exports = { nestedArr, nestedObj };
