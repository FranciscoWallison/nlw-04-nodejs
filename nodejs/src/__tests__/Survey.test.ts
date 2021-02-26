import request from 'supertest';

import { app } from '../app';

import {connection}  from  '../config/db';

describe('Surveys', () => {
  beforeAll(async () => {
    const cn = await connection;
    await cn.dropDatabase();       
    await cn.runMigrations({
        transaction: "all"
    });
    
  });

  it('Should be able to create a new survey', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Title Example',
      description: 'Description Example',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Should be able to get all surveys', async () => {
    await request(app).post('/surveys').send({
      title: 'Title Example 2',
      description: 'Description Example 2',
    });

    const response = await request(app).get('/surveys');

    expect(response.body.length).toBe(2);
  });

  afterAll(async () => {
    const cn = await connection;
    await cn.dropDatabase();
  });
});
