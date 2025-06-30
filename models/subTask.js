module.exports = (sequelize, DataTypes) => {
  const SubTask = sequelize.define('SubTask', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    associated_workpackage: { type: DataTypes.UUID, allowNull: true },
    associated_task: { type: DataTypes.UUID, allowNull: true },
    sub_task_number: { type: DataTypes.STRING, allowNull: true },
    title: { type: DataTypes.TEXT, allowNull: true },
    activity: { type: DataTypes.TEXT, allowNull: true },
    topic: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    subtask_members: { type: DataTypes.JSON, allowNull: true },
    related_sutask: { type: DataTypes.ARRAY(DataTypes.UUID), allowNull: true },
    associated_deliverables: { type: DataTypes.ARRAY(DataTypes.UUID), allowNull: true },
    sub_task_leader: { type: DataTypes.UUID, allowNull: true },
    sub_task_leading_organization: { type: DataTypes.UUID, allowNull: true }
  });

  SubTask.associate = models => {
    SubTask.belongsTo(models.Task, { foreignKey: 'associated_task' });
    SubTask.belongsTo(models.WorkPackage, { foreignKey: 'associated_workpackage' });
    SubTask.belongsTo(models.User, { as: 'sub_task_leader_user', foreignKey: 'sub_task_leader' });
    SubTask.belongsTo(models.Organization, { as: 'sub_task_leading_organization_org', foreignKey: 'sub_task_leading_organization' });
  };

  return SubTask;
};
