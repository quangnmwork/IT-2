// src/instances/sequelize.ts

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
});
sequelize.authenticate();
