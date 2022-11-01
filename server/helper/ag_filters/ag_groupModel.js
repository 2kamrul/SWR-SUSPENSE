exports.generateGroup = (rowGroupCols, groupKeys) => {
    let result = []
    rowGroupCols.forEach(item => {
        result.push(item.field)
    })
    return result
}