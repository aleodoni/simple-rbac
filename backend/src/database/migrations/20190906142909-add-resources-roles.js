module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resources_roles', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      resource_id: {
        type: Sequelize.INTEGER,
        references: { model: 'resources', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: { model: 'roles', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      can_add: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      can_edit: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      can_delete: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      can_view: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('resources_roles');
  },
};
