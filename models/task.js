module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    task_number: { type: DataTypes.STRING, allowNull: true },
    associated_wp: { type: DataTypes.UUID, allowNull: true },
    title: { type: DataTypes.TEXT, allowNull: true },
    activity: { type: DataTypes.TEXT, allowNull: true },
    topic: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    task_leader: { type: DataTypes.UUID, allowNull: true },
    task_leading_organization: { type: DataTypes.UUID, allowNull: true },
    task_members: { type: DataTypes.JSON, allowNull: true },
    associated_org: { type: DataTypes.ARRAY(DataTypes.UUID), allowNull: true },
    learnings: { type: DataTypes.TEXT, allowNull: true },
    challenges: { type: DataTypes.TEXT, allowNull: true },
    related_tasks: { type: DataTypes.ARRAY(DataTypes.UUID), allowNull: true },
    associated_technical_exploitation: { type: DataTypes.ARRAY(DataTypes.UUID), allowNull: true },
    extra_information: { type: DataTypes.JSON, allowNull: true },
    start_month: { type: DataTypes.STRING, allowNull: true },
    end_month: { type: DataTypes.STRING, allowNull: true }
  });

  Task.associate = models => {
    Task.belongsTo(models.WorkPackage, { foreignKey: 'associated_wp' });
    Task.hasMany(models.SubTask, { foreignKey: 'associated_task' });
    Task.belongsTo(models.User, { as: 'task_leader_user', foreignKey: 'task_leader' });
    Task.belongsTo(models.Organization, { as: 'task_leading_organization_org', foreignKey: 'task_leading_organization' });
  };

  return Task;
};
