const Sequelize = require('sequelize');

const TABLE = 'rep_daily_charge';

module.exports = sequelize => {
  const model = sequelize.define(TABLE,
    {
      id: {
        type: 'INT(10) UNSIGNED',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      summary_datetime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      summary_unixtime: {
        type: 'INT(10) UNSIGNED',
        allowNull: false,
      },
      site_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      member_type: {
        type: 'SMALLINT(5) UNSIGNED',
        allowNull: false,
      },
      fa_menu_id: {
        type: 'INT(10) UNSIGNED',
        allowNull: false,
      },
      charge_id: {
        type: 'SMALLINT(5) UNSIGNED',
        allowNull: false,
      },
      fa_category_id: {
        type: 'INT(10) UNSIGNED',
        allowNull: false,
        default: 0,
      },
      logic: {
        type: 'SMALLINT(5) UNSIGNED',
        allowNull: false,
        default: 0,
      },
      gender: {
        type: 'SMALLINT(5) UNSIGNED',
        allowNull: false,
        default: 0,
      },
      age: {
        type: 'SMALLINT(5) UNSIGNED',
        allowNull: false,
        default: 0,
      },
      love_status: {
        type: 'SMALLINT(5) UNSIGNED',
        allowNull: false,
        default: 0,
      },
      marriage_status: {
        type: 'SMALLINT(5) UNSIGNED',
        allowNull: false,
        default: 0,
      },
      charge_count: {
        type: 'INT(10) UNSIGNED',
        allowNull: false,
        default: 0,
      },
      charge_price: {
        type: 'INT(10) UNSIGNED',
        allowNull: false,
        default: 0,
      },
      created: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      // underscoredAll: true,
      freezeTableName: true,
      // createdAt: true,
      // updatedAt: true,
      deletedAt: false,
      charset: 'utf8',
      indexes: [
      ]
    }
  );
  return model;
};
