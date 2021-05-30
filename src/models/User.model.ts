import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from './index';
import userInterface from '../interface/user.interface'

interface UserCreationAttributes extends Optional<userInterface, "id"> { }

class User extends Model<userInterface, UserCreationAttributes> implements userInterface {
  public id!: number;
  public email!: string;
  public password!: string;
  public name!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
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
  }, { sequelize }
);