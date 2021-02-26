import { Router } from 'express';

import { UsersController } from './controllers/api/UsersController';
import { SurveysController } from './controllers//api/SurveysController';
import { SendMailController } from './controllers/api/SendMailController';
import { NpsController } from './controllers/api/NpsController';

import { AnswerController } from './controllers/AnswerController';

const router = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post('/api/users', usersController.create);
router.post('/api/surveys', surveysController.create);
router.get('/api/surveys', surveysController.show);
router.post('/api/sendMail', sendMailController.execute);
router.get('/api/nps/:survey_id', npsController.execute);

router.get('/answers/:value', answerController.execute);

export { router };