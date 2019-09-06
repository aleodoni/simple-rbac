import Sequelize, { Model } from 'sequelize';

import RoleResource from './RoleResource';

class Role extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        desc: Sequelize.STRING,
      },
      {
        tableName: 'roles',
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Resource, {
      through: RoleResource,
      foreignKey: 'role_id',
    });
  }
}

export default Role;
