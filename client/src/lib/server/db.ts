import { faker } from '@faker-js/faker';

interface Student {
	id: string;
	name: string;
	info: string;
}
// this should be fetched from the database such SQL, Postgres, MongoDB, etc.
// microsoft azure has a free tier for SQL
export const STUDENTS: Student[] = Array.from({ length: 50 }, (_, index) => ({
	id: index.toString(),
	name: `${faker.person.firstName()} ${faker.person.lastName()}`,
	info: faker.lorem.paragraph()
}));
