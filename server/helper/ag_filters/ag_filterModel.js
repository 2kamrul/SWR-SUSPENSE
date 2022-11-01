const moment = require('moment')
const { Op } = require("sequelize")

exports.generateFilter = (filterModel) => {
    let finalObj = {}
    Object.keys(filterModel).forEach(columnName => {
        const fType = filterModel[columnName].filterType // Filter Type
        let result
        switch (fType) {
            case 'set':
                result = getSetFilter(columnName, filterModel[columnName])
                finalObj = { ...finalObj, ...result }
                break
            case 'text':
                result = getTextFilter(columnName, filterModel[columnName])
                finalObj = { ...finalObj, ...result }
                break

            case 'number':
                result = getNumberFilter(columnName, filterModel[columnName])
                finalObj = { ...finalObj, ...result }
                break
            case 'date':
                result = getDateFilter(columnName, filterModel[columnName])
                finalObj = { ...finalObj, ...result }
                break
            default:
                break
        }
    })
    return finalObj
}

/** Filter Helper Functions START */
const getNumberFilter = (columnName, filterModel) => {
    /**
     * =======Sample======= 
     * columnName = id
     * filterModel = { filterType: 'text', type: 'equals', filter: 5 }
     * For range { filterType: 'text', type: 'equals', filter: 5, filterTo: 10 }
     */

    let filterData = {}

    switch (filterModel.type) {
        case 'equals':
            filterData = { ...filterData, [columnName]: { [Op.eq]: filterModel.filter } }
            break
        case 'notEqual':
            filterData = { ...filterData, [columnName]: { [Op.ne]: filterModel.filter } }
            break
        case 'lessThan':
            filterData = { ...filterData, [columnName]: { [Op.lt]: filterModel.filter } }
            break
        case 'lessThanOrEqual':
            filterData = { ...filterData, [columnName]: { [Op.lte]: filterModel.filter } }
            break
        case 'greaterThan':
            filterData = { ...filterData, [columnName]: { [Op.gt]: filterModel.filter } }
            break
        case 'greaterThanOrEqual':
            filterData = { ...filterData, [columnName]: { [Op.gte]: filterModel.filter } }
            break
        case 'inRange':
            filterData = { ...filterData, [columnName]: { [Op.between]: [filterModel.filter, filterModel.filterTo] } }
            break
        default:
            break
    }
    return filterData
}

const getTextFilter = (columnName, filterModel) => {
    /**
     * =======Sample======= 
     * columnName = status
     * filterModel = { filterType: 'text', type: 'contains', filter: 'Rejected' }
     */
    let filterData = {}

    switch (filterModel.type) {
        case 'contains':
            filterData = { ...filterData, [columnName]: { [Op.substring]: filterModel.filter } }
            break
        case 'notContains':
            /** We don't have any notSubstring so simply reverse Op.substring by using Op.not */
            filterData = {
                ...filterData,
                [Op.not]: {
                    [columnName]: {
                        [Op.substring]: filterModel.filter
                    }
                }
            }
            break
        case 'equals':
            filterData = { ...filterData, [columnName]: { [Op.eq]: filterModel.filter } }
            break
        case 'notEqual':
            filterData = { ...filterData, [columnName]: { [Op.ne]: filterModel.filter } }
            break
        case 'startsWith':
            filterData = { ...filterData, [columnName]: { [Op.startsWith]: filterModel.filter } }
            break
        case 'endsWith':
            filterData = { ...filterData, [columnName]: { [Op.endsWith]: filterModel.filter } }
            break
        default:
            break
    }
    return filterData
}

const getDateFilter = (columnName, filterModel) => {

    let filterData = {}

    switch (filterModel.type) {
        case 'equals':
            /** For equals and notEqual day, We have to make time range => startTime(00:00:00) and endTime(11:59:59) */
            filterData = { ...filterData, [columnName]: { [Op.between]: [moment(filterModel.dateFrom).startOf('day').format('YYYY-MM-DD HH:mm:ss'), moment(filterModel.dateFrom).endOf('day').format('YYYY-MM-DD HH:mm:ss')] } }
            break
        case 'notEqual':
            filterData = { ...filterData, [columnName]: { [Op.notBetween]: [moment(filterModel.dateFrom).startOf('day').format('YYYY-MM-DD HH:mm:ss'), moment(filterModel.dateFrom).endOf('day').format('YYYY-MM-DD HH:mm:ss')] } }
            break
        case 'lessThan':
            /** For lessThan of a day, We have to compare with startTime(00:00:00) of that day */
            filterData = { ...filterData, [columnName]: { [Op.lt]: moment(filterModel.dateFrom).startOf('day').format('YYYY-MM-DD HH:mm:ss') } }
            break
        case 'greaterThan':
            /** For greaterThan of a day, We have to compare with endTime(11:59:59) of that day */
            filterData = { ...filterData, [columnName]: { [Op.gt]: moment(filterModel.dateFrom).endOf('day').format('YYYY-MM-DD HH:mm:ss') } }
            break
        case 'inRange':
            /** For range of days, We have to compare with startTime(00:00:00) of starting day and endTime(11:59:59) of ending day */
            filterData = { ...filterData, [columnName]: { [Op.between]: [moment(filterModel.dateFrom).startOf('day').format('YYYY-MM-DD HH:mm:ss'), moment(filterModel.dateTo).endOf('day').format('YYYY-MM-DD HH:mm:ss')] } }
            break
        default:
            break
    }
    return filterData
}

const getSetFilter = (columnName, filterModel) => {
    /**
     * Sequalize Sample
     *  { status: { [Op.in]: ['approved', 'created'] } } 
     * 
     * FilterModel Sample
     * { values: [ 'pending' ], filterType: 'set' }
     * 
     * */
    return { [columnName]: { [Op.in]: filterModel.values } }
}
/**Filter Helper Functions END */