import express, { Request, Response } from 'express';
import boardController from '../controller/board.controller';

const router = express.Router()
const ctrl = new boardController

router.route('/').get(ctrl.getAllBoard);
router.route('/:id').get(ctrl.getBoard);

router.route('/').post(ctrl.createBoard);

router.route('/:id').put(ctrl.modifyBoard)

router.route("/:id").delete(ctrl.delBoard);

export default router;