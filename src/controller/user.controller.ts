import { NextFunction, Request, Response } from "express";


export default class userController {

  public login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const id = req.params.id;
    const pw = req.params.pw;
    try {
      // TODO: 로그인 처리 구현

      res.status(200).json({ 'message': 'login sucess' })
    } catch (error) {
      next(error)
    }
  }

};