import { NextFunction, Request, Response } from "express";
import { Board } from '../models'

export default class boardController {
    public model = Board;

    public createBoard = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const { title, writer } = req.body;
            const today = new Date()
            await this.model.create({
                id: new Date().getTime(),
                title: title,
                writer: writer,
                createDate: today,
                updateDate: today
            });
            res.status(200).json({ "message": '글 작성이 완료되었습니다.' })
        } catch (error) {
            next(error)
        }
    }

    public getBoard = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const { id } = req.params
            const text = await this.model.findOne({
                where: { "id": id }
            })
            res.status(200).json(text)
        } catch (error) {
            next(error)
        }

    }

    public getAllBoard = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const boardList = await this.model.findAll();
            res.status(200).json(boardList)
        } catch (error) {
            next(error);
        }
    }
}