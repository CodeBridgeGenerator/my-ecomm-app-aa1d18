
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
product: faker.lorem.sentence(1),
quantity: faker.lorem.sentence(1),
payment: faker.lorem.sentence(1),
total: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
