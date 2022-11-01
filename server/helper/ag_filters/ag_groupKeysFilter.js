const { Op } = require("sequelize")

exports.generateGroupKeysFilter = (rowGroupCols, groupKeys) => {
    // {
    //     [Op.and]: [
    //       { authorId: 12 },
    //       { status: 'active' }
    //     ]
    //   }
    // [
    //     {
    //      "id": "FCDCUS",
    //      "displayName": "FCDCUS",
    //      "field": "FCDCUS"
    //     },
    //     {
    //      "id": "FOTYPE",
    //      "displayName": "FOTYPE",
    //      "field": "FOTYPE"
    //     }
    //    ]
    let result = []

    groupKeys.forEach((item, index) => {
        result.push({
            [rowGroupCols[index].field]: item
        })
    })
    return { [Op.and]: result }
}