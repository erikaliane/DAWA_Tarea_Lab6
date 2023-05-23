function daysUntilChristmas() {
  var today = new Date();
  var christmas = new Date(today.getFullYear(), 11, 25); // La Navidad siempre es el 25 de diciembre
  christmas.setFullYear(today.getFullYear() + 1); // Asegurarse de obtener la próxima Navidad

  var timeDiff = christmas.getTime() - today.getTime();
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return daysDiff;
}

module.exports = {
  daysUntilChristmas: daysUntilChristmas
};
