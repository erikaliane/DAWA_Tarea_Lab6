var daysUntilChristmas = require('./source/dias_navidad');
var calculateAge = require('./source/calcularEdad');
var formValidator = require('./source/validarformulario');

module.exports = {
  daysUntilChristmas: daysUntilChristmas.daysUntilChristmas,
  calculateAge: calculateAge.calculateAge,
  validateForm: formValidator.validateForm
};
