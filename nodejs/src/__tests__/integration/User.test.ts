import request from 'supertest';

import { app } from '../../app';

import {connection} from '../../config/db'

describe('Users', () => {
  beforeAll(async () => {    
    const cn = await connection;
    await cn.dropDatabase();       
    await cn.runMigrations({
        transaction: "all"
    });
  });

  it('Should be able to create a new user', async () => {
    const response = await request(app).post('/api/users').send({
      email: '1franciscowallison@gmail.com',
      name: 'Chico Wall',
    });

    expect(response.status).toBe(201);
  });

  it('should not be able to create a user with exist email', async () => {
    const response = await request(app).post('/api/users').send({
      email: '1franciscowallison@gmail.com',
      name: 'Chico Wall',
    });

    expect(response.status).toBe(400);
  });


  it('Validating error email'  , async () => {
    const response = await request(app).post('/api/users').send({
      email: '1franciscowallison',
      name: 'Chico Wall',
    });

    expect(response.status).toBe(400);
  });

  it('Validating error name'  , async () => {
    const response = await request(app).post('/api/users').send({
      email: '1franciscowallison',
      name: '',
    });
    expect(response.status).toBe(400);
  });

  afterAll(async () => {
    const cn = await connection;
    await cn.dropDatabase();
  });
});
