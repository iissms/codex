const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const WorkPackage = require('./workPackage')(sequelize, DataTypes);
const Task = require('./task')(sequelize, DataTypes);
const SubTask = require('./subTask')(sequelize, DataTypes);
const KER = require('./ker')(sequelize, DataTypes);
const ProjectObjective = require('./projectObjective')(sequelize, DataTypes);
const TechnicalExploitation = require('./technicalExploitation')(sequelize, DataTypes);
const Deliverable = require('./deliverable')(sequelize, DataTypes);
const UserRole = require('./userRole')(sequelize, DataTypes);
const User = require('./user')(sequelize, DataTypes);
const Organization = require('./organization')(sequelize, DataTypes);

const db = {
  sequelize,
  Sequelize,
  WorkPackage,
  Task,
  SubTask,
  KER,
  ProjectObjective,
  TechnicalExploitation,
  Deliverable,
  UserRole,
  User,
  Organization
};

Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

module.exports = db;
