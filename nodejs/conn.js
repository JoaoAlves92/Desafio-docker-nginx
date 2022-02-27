import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nodedb', 'root', 'root', {
    host: 'db',
    dialect: 'mysql'
});

export default sequelize