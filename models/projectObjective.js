module.exports = (sequelize, DataTypes) => {
  const ProjectObjective = sequelize.define('ProjectObjective', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: { type: DataTypes.TEXT, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    ker: { type: DataTypes.ARRAY(DataTypes.UUID), allowNull: true },
    kpi: { type: DataTypes.JSON, allowNull: true }
  });

  ProjectObjective.associate = models => {
  };

  return ProjectObjective;
};
