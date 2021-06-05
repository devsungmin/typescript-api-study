import Sequelize, { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from './index';
import userInterface from '../interface/user.interface'

export class User extends Model<userInterface>{
  public id!: number;
  public email!: string;
  public password!: string;
  public name!: string;

  public static associations: {
    userHasManyScores: Association<User>;
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, { sequelize, modelName: "User", tableName: "userTable" }
);