const carto = require('../utils/carto');

const zoningDistrict = (string) => {
  const SQL = `
    SELECT DISTINCT sdname, cartodb_id
    FROM dcp_special_purpose_districts
    WHERE LOWER(sdname) LIKE LOWER('%25${string.toLowerCase()}%25')
    LIMIT 5
  `;

  return carto.SQL(SQL).then(rows =>
    rows.map((row) => {
      row.label = row.sdname;
      row.type = 'special-purpose-district';
      delete row.sdname;
      return row;
    }));
};

module.exports = zoningDistrict;
