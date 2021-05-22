import express, { Response, Request } from 'express'

const router = express.Router();

/**
 * GET /api/test
 * @summary test
 * @tags test
 */
router.get('/test', (req: express.Request, res: express.Response) => {
    res.send('test');
})

export default router