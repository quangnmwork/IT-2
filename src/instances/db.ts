// src/instances/sequelize.ts

import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  models: ['../models'],
});
sequelize.authenticate();
