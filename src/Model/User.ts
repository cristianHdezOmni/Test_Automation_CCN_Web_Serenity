import { faker } from '@faker-js/faker';
import { Utils } from '../Utils/Utils';

export interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string; // dd/mm/aaaa
  document: string;
  email: string;
  password: string;
}

// Genera un password seguro tipo 'Password123!'
function generateStrongPassword(): string {
  const base = 'Password';
  const number = faker.number.int({ min: 100, max: 999 });
  const symbol = faker.helpers.arrayElement(['!', '@', '#', '$']);
  return `${base}${number}${symbol}`;
}

// Formatea la fecha en dd/mm/aaaa
function formatDateToDDMMYYYY(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Factory function to generate a User with fake data using Utils.generateEmail
export function generateFakeUser(): User {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });

  return {
    firstName,
    lastName,
    dateOfBirth: formatDateToDDMMYYYY(birthDate),
    document: faker.string.numeric(8),
    email: Utils.generateEmail({ firstName, lastName }),
    password: generateStrongPassword(),
  };
}