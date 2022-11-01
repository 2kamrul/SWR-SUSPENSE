

exports.generateSorting = (sortModel) => {
    /**
     * sortModel is objective array...For axios params request it returns json object.
     * We can't directly parse json array to js array
     * So map the array and parse objects that inside array.
     * 
     * Sort model can be undefined on first time page load
     */

    /**
     * Sequelize order sample
     *  order: [
        ['id', 'DESC'],
        ['name', 'ASC'],
    ],
     */
    let sortArray = []
    sortModel && sortModel.map(item => {
        sortArray.push([`${[item.colId]}`, `${item.sort}`])
    })
    return sortArray
}