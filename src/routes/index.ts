import express, { Response, Request } from 'express'
import userRoutes from './user.route';

const router = express.Router();

/**
    server check
 */
router.get('/test', (req: express.Request, res: express.Response) => {
    res.send('test');
})

router.use('./user', userRoutes)

export default router