import { faker } from '@faker-js/faker';

const dataBook = {
  name: faker.name.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.address.streetAddress(),
  year: faker.number.int({ min: 2000, max: 2024 }),
  harga: faker.number.int({ min: 10000, max: 200000 })
};

export default dataBook;
