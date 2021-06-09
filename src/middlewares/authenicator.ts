import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models';
import userInterface from '../interface/user.interface'

export default class token {
    public model = User

    public registerUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.model.create(req.body);
            const token = jwt.sign({ email: user.email, name: user.name }, 'single', {
                expiresIn: '2day'
            });
            console.log("========");
            console.log(token)
            res.status(201).json({ token });
        } catch (error) {
            next(error);
        }
    }
}

