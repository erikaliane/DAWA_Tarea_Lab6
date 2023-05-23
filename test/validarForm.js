var assert = require('assert');
var tarea = require('../source/validarformulario');

const formData = {
    nombre: "Erika ventura",
    fechaNacimiento: "15/08/2003",
    email: "erika_ventura@email.com"
  };
  
  var requiredFields = {
    nombre: true,
    email: true,
    fechaNacimiento: true,
    // ... otros campos obligatorios
  };
  
  var errors = tarea.validateForm(formData, requiredFields);
  
  if (errors.length === 0) {
    console.log('Formulario válido. Procesar datos...');
  } else {
    console.log('Errores de validación:', errors);
  }