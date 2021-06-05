import { Sequelize } from 'sequelize';
import { config } from '../config/config';
import { UserFactor } from './User.model'

export const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        timezone: "+09:00",
    }
)

export const User = UserFactor(sequelize)