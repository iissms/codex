module.exports = (sequelize, DataTypes) => {
  const Deliverable = sequelize.define('Deliverable', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    deliverable_number: { type: DataTypes.STRING, allowNull: true },
    title: { type: DataTypes.TEXT, allowNull: true },
    status: { type: DataTypes.STRING, allowNull: true },
    document_url: { type: DataTypes.STRING, allowNull: true },
    dissemination_level: { type: DataTypes.STRING, allowNull: true },
    deliverable_type: { type: DataTypes.STRING, allowNull: true },
    wp: { type: DataTypes.UUID, allowNull: true },
    task: { type: DataTypes.ARRAY(DataTypes.UUID), allowNull: true },
    lead_beneficiary: { type: DataTypes.STRING, allowNull: true },
    contributing_beneficiary: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    reviewers: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    due_date: { type: DataTypes.STRING, allowNull: true },
    actual_submission_date: { type: DataTypes.STRING, allowNull: true },
    proceeded_data: { type: DataTypes.JSON, allowNull: true }
  });

  Deliverable.associate = models => {
    Deliverable.belongsTo(models.WorkPackage, { foreignKey: 'wp' });
  };

  return Deliverable;
};
