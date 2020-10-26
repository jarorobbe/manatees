
function FactionModel(sequelize, Sequelize) {
    const Faction = sequelize.define('factions', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
        },
        image: {
            type: Sequelize.STRING,
        }
    }); 

    return Faction;
}


export { FactionModel };