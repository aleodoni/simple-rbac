import Sequelize, { Model } from 'sequelize';

class Resource extends Model {
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
    this.belongsToMany(models.Role, {
      through: 'resources_roles',
      as: 'roles',
      foreignKey: 'resource_id',
    });
  }
}

export default Resource;
