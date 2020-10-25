//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

/**********************************/
//       DB Configuration
//       ./config/db.config.js
/**********************************/

import Sequelize from 'sequelize';
import dbConfig from '../config/db.config.js';
import { ChampionModel } from './champion-model.js';
//const DbConfig = require('../config/db.config.js');

const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER, 
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.champion = ChampionModel(sequelize, Sequelize);

export default { db, sequelize };

