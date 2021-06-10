import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../models";
// import 
export default class userController {
  public model = User;

  public register = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { email, password, name } = req.body
    try {
      // TODO: 중복 회원 체크 처리
      const checkUser = await this.model.findOne({
        where: { "email": email }
      })
      if (checkUser == null) {
        const user = await this.model.create({
          email: email,
          password: password,
          name: name,
        })
        const token = jwt.sign({ email: user.email, name: user.name }, 'single', {
          expiresIn: '14 days'
        });
        res.status(200).json({ "message": 'register sucess', "token": token })
        checkUser == null;
      }
      else {
        res.status(302).json({ "message": "이미 있는 회원입니다." })
      }
    } catch (error) {
      next(error)
    }
  }

  public login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      // TODO: 로그인 처리 구현
      const { email, password } = req.body
      const user = await this.model.findOne({
        where: { "email": email }
      });

      if (user?.email == email && user?.password == password) {
        if (user != null) {
          const token = jwt.sign({ email: user.email, name: user.name }, 'single', {
            expiresIn: '1h'
          });
          res.status(200).json({ 'message': 'login sucess', "token": token })
        }
      } else {
        res.status(300).json({ 'messaage': 'login error' })
      }
    } catch (error) {
      next(error)
    }
  }

};