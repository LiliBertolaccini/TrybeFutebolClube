import { DataTypes, InferAttributes, Model } from 'sequelize';
import database from './index';

export default class User extends Model<InferAttributes<User>> {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

User.init({
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: DataTypes.STRING,
  role: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize: database,
  timestamps: false,
  modelName: 'users',
  tableName: 'users',
  underscored: true,
});
