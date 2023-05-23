function validateForm(formData, requiredFields) {
    var errors = [];
  
    for (var field in requiredFields) {
      if (requiredFields.hasOwnProperty(field)) {
        if (requiredFields[field] && !formData[field]) {
          errors.push("El campo " + field + " es obligatorio.");
        }
      }
    }
  
    // Aquí puedes agregar más validaciones según los tipos de datos que necesites verificar
  
    return errors;
  }
  
  module.exports = {
    validateForm: validateForm
  };
  