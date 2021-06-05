import express, { Request, Response, Application } from 'express';

class App {
    public application: Application;

    constructor() {
        this.application = express();
        this.router();
    }

    private router(): void {
        this.application.get('/api', (req: Request, res: Response) => {
            res.send('hello typescript server!');
        })
    }

}

export default App;