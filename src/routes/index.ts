import express, { NextFunction, Request, Response } from 'express'
import userRoutes from './user.route';

const router = express.Router();

/**
    server check
 */
router.get('/server-check', (req: Request, res: Response, next: NextFunction) => {
    res.send('server check');
})

router.use('/user', userRoutes)

export default router