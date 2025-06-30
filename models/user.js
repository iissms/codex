module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: { type: DataTypes.STRING, allowNull: true },
    full_name: { type: DataTypes.STRING, allowNull: true },
    last_name: { type: DataTypes.STRING, allowNull: true },
    suffix: { type: DataTypes.STRING, allowNull: true },
    email_address: { type: DataTypes.STRING, allowNull: true },
    phone_number: { type: DataTypes.STRING, allowNull: true },
    country: { type: DataTypes.STRING, allowNull: true },
    designation: { type: DataTypes.STRING, allowNull: true },
    associated_organization: { type: DataTypes.UUID, allowNull: true },
    technical_expertise: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    bio: { type: DataTypes.TEXT, allowNull: true },
    linkedin: { type: DataTypes.STRING, allowNull: true },
    website: { type: DataTypes.STRING, allowNull: true },
    orcid: { type: DataTypes.STRING, allowNull: true },
    social_url: { type: DataTypes.JSON, allowNull: true },
    cv: { type: DataTypes.STRING, allowNull: true },
    publications: { type: DataTypes.STRING, allowNull: true }
  });

  User.associate = models => {
    User.belongsTo(models.Organization, { foreignKey: 'associated_organization' });
  };

  return User;
};
