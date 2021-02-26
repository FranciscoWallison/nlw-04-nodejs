import { Request, Response } from 'express';
import {connection}  from  '../../config/db';
import { UsersRepository } from '../../repositories/UsersRepository';
import * as Yup from 'yup';
import { AppError } from '../../errors/AppError';

class UsersController {
 
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      throw new AppError(error);
    }
    
    const usersRepository = (await connection).getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}

export { UsersController };
