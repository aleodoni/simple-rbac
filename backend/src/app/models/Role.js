import Sequelize, { Model } from 'sequelize';

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
      through: 'resources_roles',
      as: 'resources',
      foreignKey: 'role_id',
    });
  }
}

export default Role;
