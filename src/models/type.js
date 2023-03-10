module.exports = (sequelize, DataTypes) => {
    let Type = sequelize.define("Type", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    Type.associate = (models) => {

        Type.hasMany(models.Field, {
            foreignKey: "typeId",
            as: "fields",
        })

        Type.hasMany(models.Entry, {
            foreignKey: "typeId",
            as: "entries",
        })
    }

    return Type
}