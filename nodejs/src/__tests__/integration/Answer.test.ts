import request from 'supertest';

import { app } from '../../app';

import {connection} from '../../config/db'



describe('Answer', () => {
  beforeAll(async () => {    
    const cn = await connection;
    await cn.dropDatabase();       
    await cn.runMigrations({
        transaction: "all"
    });
  });

  // it('Consultando pesquisas'  , async () => {
  //   const responseSurveys = await request(app).post('/api/surveys').send({
  //     title: 'Title Example',
  //     description: 'Description Example',
  //   });

  //   const responseUser = await request(app).post('/api/users').send({
  //     email: '1franciscowallison@gmail.com',
  //     name: 'Chico Wall',
  //   });

  //   const responseSendEmail = await request(app).post('/api/sendMail').send({
  //     email: responseUser.body.email,
  //     survey_id: responseSurveys.body.id,
  //   });

  //   const response = await request(app).get('/answers/8?u='+responseSendEmail.body.id).send();
  //   expect(response.status).toBe(200);
  // });

  it('Validate that there is no Survey'  , async () => {
    
    const response = await request(app).get('/answers/8?u=23123123132-321-321-321-32-1321').send();

    expect(response.status).toBe(400);
  });
  
  afterAll(async () => {
    const cn = await connection;
    await cn.dropDatabase();
  });
});
