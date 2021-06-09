import express, { Request, Response } from 'express'
import userController from '../controller/user.controller'
import authenicator from '../middlewares/authenicator'

const router = express.Router()
const ctrl = new userController
const token = new authenicator

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ "message": "user api" })
})

router.route('/login').post(ctrl.login)
router.route('/register').post(token.registerUser, ctrl.register)

export default router;