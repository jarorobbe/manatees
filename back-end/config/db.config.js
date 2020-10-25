
const dbConfig = {
    HOST: "localhost",
    USER: "manatees-back-end",
    PASSWORD: "manatees",
    DB: "manatees",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

//module.exports.getDbConfig = () => {
//    return dbConfig;
//}

export default dbConfig;