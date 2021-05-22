import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from './index';

interface UserAttributes {
  id: number;
  email: string,
  password: string;
  name: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
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