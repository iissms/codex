module.exports = (sequelize, DataTypes) => {
  const WorkPackage = sequelize.define('WorkPackage', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    wp_number: { type: DataTypes.INTEGER, allowNull: true },
    wp_title: { type: DataTypes.TEXT, allowNull: true },
    wp_objective: { type: DataTypes.TEXT, allowNull: true },
    wp_leader: { type: DataTypes.UUID, allowNull: true },
    wp_leading_organization: { type: DataTypes.UUID, allowNull: true },
    wp_members: { type: DataTypes.JSON, allowNull: true },
    associated_ker: { type: DataTypes.ARRAY(DataTypes.UUID), allowNull: true },
    associate_project_objectives: { type: DataTypes.ARRAY(DataTypes.UUID), allowNull: true },
    start_month: { type: DataTypes.STRING, allowNull: true },
    end_month: { type: DataTypes.STRING, allowNull: true }
  });

  WorkPackage.associate = models => {
    WorkPackage.hasMany(models.Task, { foreignKey: 'associated_wp' });
    WorkPackage.belongsTo(models.User, { as: 'wp_leader_user', foreignKey: 'wp_leader' });
    WorkPackage.belongsTo(models.Organization, { as: 'wp_leading_organization_org', foreignKey: 'wp_leading_organization' });
  };

  return WorkPackage;
};
