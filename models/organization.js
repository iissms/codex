module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    pic_number: { type: DataTypes.STRING, allowNull: true },
    org_name: { type: DataTypes.STRING, allowNull: true },
    short_name: { type: DataTypes.STRING, allowNull: true },
    email_address: { type: DataTypes.STRING, allowNull: true },
    phone_number: { type: DataTypes.STRING, allowNull: true },
    address: { type: DataTypes.STRING, allowNull: true },
    zip_code: { type: DataTypes.INTEGER, allowNull: true },
    country: { type: DataTypes.STRING, allowNull: true },
    org_role: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true }
  });

  Organization.associate = models => {
    Organization.hasMany(models.User, { foreignKey: 'associated_organization' });
    Organization.hasMany(models.WorkPackage, { foreignKey: 'wp_leading_organization' });
    Organization.hasMany(models.Task, { foreignKey: 'task_leading_organization' });
    Organization.hasMany(models.SubTask, { foreignKey: 'sub_task_leading_organization' });
  };

  return Organization;
};
