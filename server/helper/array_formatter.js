
exports.getDistinctDependsOnMultipleColumn = (arr, keyProps) => {
    /** #Example
     * arr = data list [{a:1, b:2}, {a:1, b:3}, {a:1, b:2}]
     * keyProps = ['a', 'b'] 
     * */
    return Object.values(arr.reduce((uniqueMap, entry) => {
        const key = keyProps.map(k => entry[k]).join('|')
        if (!(key in uniqueMap)) uniqueMap[key] = entry
        return uniqueMap
    }, {}))
}