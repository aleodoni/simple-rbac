import Sequelize, { Model } from 'sequelize';

class RoleResource extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        resource_id: Sequelize.INTEGER,
        role_id: Sequelize.INTEGER,
        can_add: Sequelize.BOOLEAN,
        can_edit: Sequelize.BOOLEAN,
        can_delete: Sequelize.BOOLEAN,
        can_view: Sequelize.BOOLEAN,
      },
      {
        tableName: 'resources_roles',
        sequelize,
      }
    );

    return this;
  }
}

export default RoleResource;
