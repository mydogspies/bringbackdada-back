module.exports = (sequelize, Sequelize) => {
    return sequelize.define("dbtest", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        test: {
            type: Sequelize.STRING
        }
    });
};
