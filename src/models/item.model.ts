import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export interface Item {
  id: string
  name: string
  description?: string
  quantity: number
  createdAt: Date
  deletedAt?: Date
}

export const generateFakeData = (): Item => {
  return {
    id: uuidv4(),
    name: faker.lorem.word(),
    description: faker.lorem.words(),
    quantity: Math.random(),
    createdAt: new Date(),
  }
}
