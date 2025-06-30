const { v4: uuidv4 } = require('uuid');

const organizationIds = {
  zsi: uuidv4(),
  uja: uuidv4(),
  minoan: uuidv4(),
};

const userIds = {
  alice: uuidv4(),
  bob: uuidv4(),
  charlie: uuidv4(),
  david: uuidv4(),
  eva: uuidv4(),
};

const workPackageIds = {
  wp1: uuidv4(),
  wp2: uuidv4(),
};

const taskIds = {
  t1: uuidv4(),
  t2: uuidv4(),
  t3: uuidv4(),
  t4: uuidv4(),
};

const subTaskIds = {
  st1: uuidv4(),
  st2: uuidv4(),
  st3: uuidv4(),
  st4: uuidv4(),
  st5: uuidv4(),
  st6: uuidv4(),
};

const deliverableIds = {
  d1: uuidv4(),
  d2: uuidv4(),
  d3: uuidv4(),
};

const userRoleIds = {
  coordinator: uuidv4(),
  researcher: uuidv4(),
  developer: uuidv4(),
};

const kerIds = {
  ker1: uuidv4(),
  ker2: uuidv4(),
};

const projectObjectiveIds = {
  po1: uuidv4(),
  po2: uuidv4(),
};

const technicalExploitationIds = {
  te1: uuidv4(),
  te2: uuidv4(),
};

module.exports = {
  organizationIds,
  userIds,
  workPackageIds,
  taskIds,
  subTaskIds,
  deliverableIds,
  userRoleIds,
  kerIds,
  projectObjectiveIds,
  technicalExploitationIds,
};
