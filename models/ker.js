module.exports = (sequelize, DataTypes) => {
  const KER = sequelize.define('KER', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: { type: DataTypes.TEXT, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true }
  });

  KER.associate = models => {
  };

  return KER;
};
