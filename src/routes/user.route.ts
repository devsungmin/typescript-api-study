import express, { Request, Response } from 'express'
import userController from '../controller/user.controller'

const router = express.Router()
const ctrl = new userController

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ "message": "user api" })
})

router.route('/login').post(ctrl.login)
router.route('/register').post(ctrl.register)

export default router;