import { NextFunction, Request, Response } from "express";
import { User } from "../models";
// import 
export default class userController {
  public model = User;

  public register = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { email, password, name } = req.body
    try {
      // TODO: 중복 회원 체크 처리

      await this.model.create({
        id: 1,
        email: email,
        password: password,
        name: name
      })
      res.status(200).json({ "message": 'register sucess' })
    } catch (error) {
      next(error)
    }
  }

  public login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { email, password } = req.body
    try {
      // TODO: 로그인 처리 구현


      res.status(200).json({ 'message': 'login sucess' })
    } catch (error) {
      next(error)
    }
  }

};