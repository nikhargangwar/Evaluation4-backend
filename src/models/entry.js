module.exports = (sequelize, DataTypes) => {
    let Entry = sequelize.define("Entry", {
        data: {
            type: DataTypes.JSON,
            allowNull: false
        },
    })

    Entry.associate = (models) => {

        Entry.belongsTo(models.Type, {
            onDelete: "CASCADE",
            foreignKey: "typeId",
        })

    }

    return Entry
}