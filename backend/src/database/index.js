import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Role from '../app/models/Role';
import Resource from '../app/models/Resource';
import RoleResource from '../app/models/RoleResource';
import UserRole from '../app/models/UserRole';

const models = [User, Role, Resource, RoleResource, UserRole];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // Test the connection
    // this.connection.authenticate();

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
