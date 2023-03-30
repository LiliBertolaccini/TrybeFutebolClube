import { DataTypes, InferAttributes, Model } from 'sequelize';
import database from './index';

export default class Team extends Model<InferAttributes<Team>> {
  declare id: number;
  declare teamName: string;
}

Team.init({
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: database,
  timestamps: false,
  modelName: 'teams',
  tableName: 'teams',
  underscored: true,
});
