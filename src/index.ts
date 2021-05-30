import App from './App';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import cors from 'cors';
import dotenv from 'dotenv'

import routes from "./routes";
import { sequelize } from './models'

dotenv.config();

const app = new App().application;
const port: number = parseInt(process.env.PORT as string, 10) || 3000;

// swagger
const options: swaggerJSDoc.OAS3Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'typescript rest api server',
            description: '타입스크립트 공부',
            version: '1.0.0',
        },
        servers: [
            { url: '/api', description: 'API version 1 URL' },
        ],
    },
    apis: [],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', routes);
app.use(cors());
sequelize.sync();

// server open
const server = app.listen(port, async () => {
    console.log('Server listening on poart 3000!');
    await sequelize.authenticate().then((async) => {
        console.log("connect sucess mysql!!")
    }).catch((err) => {
        console.log("failㅠㅠ: ", err);
    })
});

export default server;