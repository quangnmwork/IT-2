// src/instances/sequelize.ts


import { Sequelize } from 'sequelize'

const db = 'expressapp'
const username = 'root'
const password = 'root'

export const sequelize = new Sequelize("sqlite::memory:");

sequelize.authenticate()