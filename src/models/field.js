module.exports = (sequelize, DataTypes) => {
    let Field = sequelize.define("Field", {
        fieldName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fieldType: {
            type: DataTypes.ENUM("text","email","number"),
            allowNull: false
        }
    })

    Field.associate = (models) => {

        Field.belongsTo(models.Type, {
            onDelete: "CASCADE",
            foreignKey: "typeId",
        })

    }

    return Field
}