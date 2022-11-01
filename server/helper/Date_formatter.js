

exports.GET_DATE_SUBSTRING_YEAR_MONTH = (field_name) => {
    /**
     * FROM 20210101 (Float) 
     * TO 2021-01 (String or varchar)
     */
    return `CONCAT(SUBSTRING(CAST(${field_name} AS VARCHAR(32)), 1, 4), \'-\', SUBSTRING(CAST(${field_name} AS VARCHAR(32)), 5, 2))`
}