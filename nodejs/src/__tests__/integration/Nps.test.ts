import request from 'supertest';

import { app } from '../../app';

import {connection} from '../../config/db'

describe('Nps', () => {
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
  //   const response = await request(app).get('/api/nps/'+responseSurveys.body.id).send();
  //   expect(response.status).toBe(200);
  // });

  it('Validate that there is no Survey'  , async () => {
    
    const response = await request(app).get('/api/nps/21321321665-231321321-654654654').send();

    expect(response.status).toBe(400);
  });
  
  afterAll(async () => {
    const cn = await connection;
    await cn.dropDatabase();
  });
});
