import express from 'express'
import userController from '../controller/user.controller'

const router = express.Router()
const ctrl = new userController()

router.route('/login').post(ctrl.login);

export default router;