//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

/**********************************/
//       DB Configuration
//       ./config/db.config.js
/**********************************/

import Sequelize from 'sequelize';
import dbConfig from '../config/db.config.js';
import { ChampionModel } from './champion-model.js';
import { FactionModel } from './faction-model.js';
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

var Champion = ChampionModel(sequelize, Sequelize);
var Faction = FactionModel(sequelize, Sequelize);

// Enable relations between models
Faction.hasMany(Champion, {as: 'champions'});
Champion.belongsTo(Faction, 
    {foreignKey: 'factionId', 
    as: 'faction'
});

// Add models to the database
db.champion = Champion;
db.faction = Faction;

export default { db, sequelize };

