import { Model, DataTypes, Association, BuildOptions, Sequelize } from 'sequelize';
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
export type UserStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): User;
};

export function UserFactor(sequelize: Sequelize): UserStatic {
  return <UserStatic>sequelize.define("user", {
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
  })
}