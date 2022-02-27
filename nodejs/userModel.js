import { Model, DataTypes } from 'sequelize';
import sequelize from './conn.js';

class User extends Model {}
User.init({
  name: DataTypes.STRING
}, { sequelize, modelName: 'user' });

export default User