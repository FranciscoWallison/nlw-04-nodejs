import request from 'supertest';

import { app } from '../app';

import {connection}  from  '../config/db';

describe('SendMail', () => {
  beforeAll(async () => {    
    const cn = await connection;
    await cn.dropDatabase();       
    await cn.runMigrations({
        transaction: "all"
    });
  });

  // it('Validating creat send email'  , async () => {
  //   const responseSurveys = await request(app).post('/api/surveys').send({
  //     title: 'Title Example',
  //     description: 'Description Example',
  //   });

  //   const responseUser = await request(app).post('/api/users').send({
  //     email: '1franciscowallison@gmail.com',
  //     name: 'Chico Wall',
  //   });

  //   const response = await request(app).post('/api/sendMail').send({
  //     email: responseUser.body.email,
  //     survey_id: responseSurveys.body.id,
  //   });

  //   expect(response.status).toBe(200);
  // });

  it('validate that there is no User'  , async () => {
    const responseSurveys = await request(app).post('/api/surveys').send({
      title: 'Title Example',
      description: 'Description Example',
    });

    const response = await request(app).post('/api/sendMail').send({
      email: '1franciscowallison',
      survey_id: responseSurveys.body.id,
    });

    expect(response.status).toBe(400);
  });

  it('validate that there is no Survey'  , async () => {

    const responseUser = await request(app).post('/api/users').send({
      email: '1franciscowallison@gmail.com',
      name: 'Chico Wall',
    });

    const response = await request(app).post('/api/sendMail').send({
      email: responseUser.body.id,
      survey_id: 'asdasdas-asdasdasd-asdasd',
    });
    expect(response.status).toBe(400);
  });
  
  afterAll(async () => {
    const cn = await connection;
    await cn.dropDatabase();
  });
});
