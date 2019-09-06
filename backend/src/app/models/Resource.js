import Sequelize, { Model } from 'sequelize';

import RoleResource from './RoleResource';

class Resource extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        desc: Sequelize.STRING,
      },
      {
        tableName: 'resources',
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Role, {
      through: RoleResource,
      foreignKey: 'resource_id',
    });
  }
}

export default Resource;
