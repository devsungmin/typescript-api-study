import dotenv from 'dotenv';
dotenv.config();

export const config = {
    development: {
        username: process.env.DB_USERNAME || 'typescript_server_db',
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DBNAME || 'typescript_api_study',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }
}