import { Sequelize } from 'sequelize';
import path from 'path';
import fs from 'fs';

const dataFolder = path.resolve(__dirname, '..', 'data');
if (!fs.existsSync(dataFolder)) fs.mkdirSync(dataFolder, { recursive: true });

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(dataFolder, 'database.sqlite'),
  logging: false,
});

export default sequelize;
