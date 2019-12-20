'use strict';
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    appointmentDate: DataTypes.DATE,
    isAccepted: DataTypes.BOOLEAN,
    type: DataTypes.STRING
  }, {});
  Request.associate = function(models) {
    // associations can be defined here
  };
  return Request;
};