import Sequelize, { Model } from 'sequelize';
import { sequelize } from './index';

export class User extends Model { }

export class userModel {
  id: number
  email: string
  password: string
  name: string
}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(128),
      allowNull: true
    },
    name: {
      type: Sequelize.STRING(128),
      allowNull: false
    }
  }, { sequelize, modelName: "User", tableName: "userTable" }
);