import { NextFunction, Request, Response } from "express";
import { Board } from '../models'

export default class boardController {
    public model = Board;

    public createBoard = (req: Request, res: Response, next: NextFunction) => {
        try {
            const { title, writer, post } = req.body;
            const today = new Date()
            this.model.create({
                id: new Date().getTime(),
                title: title,
                writer: writer,
                post: post,
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
            const board = await this.model.findOne({
                where: { "id": id }
            })
            res.status(200).json(board)
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

    public modifyBoard = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const { title, post } = req.body
            const today = new Date()
            const board = await this.model.findOne({
                where: { "id": id }
            })
            await board?.update({
                "title": title,
                "post": post,
                "updateDate": today
            })
            res.status(200).json({ "message": '글 수정이 완료되었습니다.' })
        } catch (error) {
            next(error)
        }
    }

    public delBoard = (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const board = this.model.findOne({
                where: { "id": id }
            })
            if (board === null) {
                res.status(400).json({ "message": "게시글이 없습니다." })
            } else {
                this.model.destroy({ where: { "id": id } })
                res.status(200).json({ "message": '글 삭제가 되었습니다.' })
            }
        } catch (error) {
            next(error)
        }
    }
}