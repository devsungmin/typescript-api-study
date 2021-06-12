import express, { NextFunction, Request, Response } from 'express'
import userRoutes from './user.route';
import boardRoutes from './board.route';

const router = express.Router();

/**
    server check
 */
router.get('/server-check', (req: Request, res: Response, next: NextFunction) => {
    res.send('server check');
})

router.use('/user', userRoutes)
router.use('/board', boardRoutes)

export default router