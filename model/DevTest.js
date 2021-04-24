module.exports = (sequelize, Sequelize) => {
    const DevTest = sequelize.define("devtest", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        test: {
            type: Sequelize.STRING
        }
    });

    return DevTest;
};
