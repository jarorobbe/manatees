
function ChampionModel(sequelize, Sequelize) {
    const Champion = sequelize.define('champions', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.STRING,
        },
        faction: {
            type: Sequelize.STRING,
        },
        image: {
            type: Sequelize.STRING,
        }
    }); 

    return Champion;
}



export { ChampionModel };