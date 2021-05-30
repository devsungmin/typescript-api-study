import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';


//회원 가입
export async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await User.create(req.body);
        const token = jwt.sign({ id: user.id, email: user.email, password: user.password }, 'single', { expiresIn: '1day' });
        res.status(200).json({
            "token": token,
            "message": "sucess"
        })
    } catch (error) {
        next(error);
    }
}

// 로그인
export async function loginUser(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body;
        const user: User = await User
    }
}