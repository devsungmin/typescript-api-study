import App from './App';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = new App().application;
const port = 3000;

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

// server open
app.listen(port, () => {
    console.log('Server listening on poart 3000!');
});
