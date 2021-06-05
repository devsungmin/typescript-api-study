import Sequelize, { Model } from 'sequelize';
import { sequelize } from './index';
import userInterface from '../interface/user.interface'

export class User extends Model<userInterface>{
  public id!: number;
  public email!: string;
  public password!: string;
  public name!: string;
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