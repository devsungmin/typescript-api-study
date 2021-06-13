import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../models";
// import 
export default class userController {
  public model = User;

  public register = (req: Request, res: Response, next: NextFunction) => {
    const { email, password, name } = req.body
    try {
      const checkUser = this.model.findOne({
        where: { "email": email }
      })
      // const refreshToken = jwt.sign(, 'single', {
      //   expiresIn: '1h'
      // })

      //TODO: refreshToken값 처리
      if (checkUser == null) {
        const user = this.model.create({
          id: new Date().getTime(),
          email: email,
          password: password,
          name: name,
          refreshToken: "123"
        })
        const token = jwt.sign(user, 'single', {
          expiresIn: '14 days'
        });
        res.status(200).json({ "message": 'register sucess', "token": token })
        checkUser == null;
      }
      else {
        res.status(403).json({ "message": "이미 있는 회원입니다." })
      }
    } catch (error) {
      next(error)
    }
  }

  public login = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password } = req.body
      const user = this.model.findOne({
        where: { "email": email, "password": password }
      });

      if (!user) {
        if (user != null) {
          const AccessToken = jwt.sign(user, 'single', {
            expiresIn: '1h'
          });

          const refreshToken = jwt.sign(user, 'single', {
            expiresIn: '1h'
          });
          res.status(200).json({ 'message': 'login sucess', "token": AccessToken })
        }
      } else {
        res.status(403).json({ 'messaage': 'login error' })
      }
    } catch (error) {
      next(error)
    }
  }

};