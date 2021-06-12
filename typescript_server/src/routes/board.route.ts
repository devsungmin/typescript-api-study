import express, { Request, Response } from 'express';
import boardController from '../controller/board.controller';

const router = express.Router()
const ctrl = new boardController

router.route('/').get(ctrl.getAllBoard);
router.route('/test').get(ctrl.getBoard);

router.route('/').post(ctrl.createBoard);

export default router;