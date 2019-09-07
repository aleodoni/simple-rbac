import Sequelize, { Model } from 'sequelize';

class UserRole extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: Sequelize.INTEGER,
        role_id: Sequelize.INTEGER,
      },
      {
        tableName: 'user_roles',
        sequelize,
      }
    );

    return this;
  }
}

export default UserRole;
