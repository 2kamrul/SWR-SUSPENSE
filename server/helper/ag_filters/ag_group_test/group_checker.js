
const { Sequelize, Op } = require("sequelize")
const { generateFilter } = require('../ag_filterModel')


exports.generateGroupBy = (request) => {
    const { rowGroupCols, groupKeys } = request
    const isGroupState = rowGroupCols.length > groupKeys.length

    if (isGroupState) return rowGroupCols[groupKeys.length].field

    return []
}

exports.generateAttributes = (request) => {
    const { rowGroupCols, groupKeys, valueCols } = request
    const isGroupState = rowGroupCols.length > groupKeys.length

    /** For grouping Selected columns = (group column + aggFun columns) */
    if (isGroupState) {
        const selectedColumns = [rowGroupCols[groupKeys.length].field] // Adding group coumn to array
        valueCols.forEach(valueCol => {
            selectedColumns.push(
                [Sequelize.fn(valueCol.aggFunc, Sequelize.col(valueCol.field)), valueCol.field] // Adding agg coumns to array
                /** attributes: ['username', [Sequelize.fn('SUM', Sequelize.col('total_price')), 'total_price']] (sum col as col_name) */
            )
        })
        return selectedColumns // return group column + agg columns
    }
    return { exclude: [] } // return all(*)
}

exports.generateGroupKeysFilter = (request) => {
    /** Two types of filter
     * 01. filterModel = It's global filter. Applies to whole things(Top group, child group and non group flat data)
     * 02. groupKeys = For group columns. When group expand then child should be filtered by parent value and also filterModel.
     * An example : A is the parent groupColumn and b is child group column, after that all flat data. So -
     * A (where ...filterModel) (groupKeys[])
     *      -> B (where parent A && ...filterModel) (groupKeys['A'])
     *              -> Flat data (where parent A && parent B &&  ...filterModel) (groupKeys['A', 'B'])
    */
    const { rowGroupCols, groupKeys, filterModel } = request
    const groupKeysFilterResult = []

    if (groupKeys) { // groupKeys.length > 0
        groupKeys.forEach((groupKey, index) => {
            groupKeysFilterResult.push({
                [rowGroupCols[index].field]: groupKey
            })
        })
        return { [Op.and]: groupKeysFilterResult, ...generateFilter(filterModel) }
    }
    return generateFilter(filterModel)
}

exports.generateOrderBy = (request, defaultOrderDirection) => {
    const { rowGroupCols, groupKeys, sortModel, valueCols } = request
    const isGroupState = rowGroupCols.length > groupKeys.length
    let aggSortResult = []

    /** Group state and  not group state both state e sort hote pare.
     * 01. Group state e 2 types er column thake. Group column and agg column..So both type er upor sort hote pare -
     *     a) Group column (Multiple column group thakle parent to child same sort direction('ASC' or 'DESC') e sort hobe)
     *     b) AggFun column (Multiple column sort e different direction e sort kora jabe)
     * 
     * Note: Multiple column sort e Group column and Agg column mix kore sort korle group column er sort ignore kora hobe,
     *       just agg column e sort apply hobe.
     * 
     * 02. For non group state as like as normal sorting
     */

    const isColumnExistInAgg = (sortItem) => {
        return valueCols.findIndex(x => x.field === sortItem.colId)
    }

    if (isGroupState) {
        if (sortModel.length > 0) {
            sortModel.forEach(sortKey => {
                const aggColIndex = isColumnExistInAgg(sortKey) // return index if exist, otherwise -1
                if (aggColIndex >= 0) {
                    aggSortResult.push([Sequelize.fn(valueCols[aggColIndex].aggFunc, Sequelize.col(sortKey.colId)), sortKey.sort])
                }
            })
            return aggSortResult.length > 0 // 0 means no agg col sort available
                ? aggSortResult // Agg column sort (Here is ignoring group colmn when mixing group column with agg column of multiple sort)
                : [[`${rowGroupCols[groupKeys.length].field}`, sortModel[0].sort]] // Group col sort
        } else {
            return [[`${rowGroupCols[groupKeys.length].field}`, defaultOrderDirection]] // Gorup column default sort direction.
        }
    } else {
        return sortModel.map(item => [item.colId, item.sort]) // Non-group column sorting
    }
}

// exports.generateOrderBy = (request, defaultOrderDirection) => {
//     const { rowGroupCols, groupKeys, valueCols, sortModel } = request
//     const isGroupState = rowGroupCols.length > groupKeys.length

//     const sortKeyResult = []

//     console.log(isGroupState)

//     const findInGroupModel = (sortItem) => {
//         // console.log(rowGroupCols.findIndex(x => ))
//         return rowGroupCols.findIndex(x => x.field === sortItem.colId) >= 0
//     }

//     const findInAggModel = (sortItem) => {
//         return valueCols.findIndex(x => x.field === sortItem.colId)
//     }

//     if (isGroupState) {
//         if (sortModel.length > 0) {
//             // if (rowGroupCols.findIndex(x => x.field === sortModel[0].colId) >= 0) {
//             sortModel.forEach((sortKey, index) => {
//                 // console.log(sortKey)
//                 // console.log(findInGroupModel(sortKey))
//                 // console.log(findInAggModel(sortKey))
//                 if (findInGroupModel(sortKey)) {
//                     if (index <= groupKeys.length)
//                         return [`${rowGroupCols[groupKeys.length].field}`, sortModel[0].sort]
//                     // sortKeyResult.push([sortKey.colId, sortKey.sort])
//                 } else if (findInAggModel(sortKey) >= 0) {
//                     sortKeyResult.push([Sequelize.fn(valueCols[findInAggModel(sortKey)].aggFunc, Sequelize.col(sortKey.colId)), sortKey.sort])
//                 }
//                 //  else {
//                 //     sortKeyResult.push([sortKey.colId, sortKey.sort])
//                 // }
//             })
//             return sortKeyResult
//             //     return [[`${rowGroupCols[groupKeys.length].field}`, sortModel[0].sort]]
//             // } else {
//             //     return [[`${rowGroupCols[groupKeys.length].field}`, sortModel[0].sort]]
//             // }
//         } else {
//             return [[`${rowGroupCols[groupKeys.length].field}`, defaultOrderDirection]]
//         }
//     } else {
//         return sortModel.map(item => [`${[item.colId]}`, `${item.sort}`])

//         // if (sortModel.length > 0) {
//         //     if (rowGroupCols.findIndex(x => x.field === sortModel[0].colId) >= 0) {
//         //         return [[`value_one`, 'ASC']]
//         //     } else {
//         //         return sortModel.map(item => [`${[item.colId]}`, `${item.sort}`])
//         //     }
//         // } else {
//         //     return sortModel.map(item => [`${[item.colId]}`, `${item.sort}`])
//         // }
//     }
// }


// exports.generateOrderBy = (request, defaultOrderDirection) => {
//     const { rowGroupCols, groupKeys, sortModel } = request
//     const isGroupState = rowGroupCols.length > groupKeys.length

//     console.log(isGroupState)

//     if (isGroupState) {
//         if (sortModel.length > 0) {
//             if (rowGroupCols.findIndex(x => x.field === sortModel[0].colId) >= 0) {
//                 return [[`${rowGroupCols[groupKeys.length].field}`, sortModel[0].sort]]
//             } else {
//                 return [[`${rowGroupCols[groupKeys.length].field}`, sortModel[0].sort]]
//             }
//         } else {
//             return [[`${rowGroupCols[groupKeys.length].field}`, defaultOrderDirection]]
//         }
//     } else {
//         return sortModel.map(item => [`${[item.colId]}`, `${item.sort}`])

//         // if (sortModel.length > 0) {
//         //     if (rowGroupCols.findIndex(x => x.field === sortModel[0].colId) >= 0) {
//         //         return [[`value_one`, 'ASC']]
//         //     } else {
//         //         return sortModel.map(item => [`${[item.colId]}`, `${item.sort}`])
//         //     }
//         // } else {
//         //     return sortModel.map(item => [`${[item.colId]}`, `${item.sort}`])
//         // }
//     }
// }




