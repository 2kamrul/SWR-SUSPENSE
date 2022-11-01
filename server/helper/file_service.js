const moment = require('moment')
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

//================TRANSFER FILE TO SERVER================
exports.moveFile = async (file, previous_path = null, DOCUMENT_ROOT_DIRECTORY) => {
    /**
     * previous_path is the path that current file should replace that file (For updating file)
     */
    try {
        const CURRENT_TIMESTAMP = moment(new Date).format('YYYYMMDDHHmmSS')
        const subFolders = moment().format('YYYY/MM/DD') // Slash(/) format means multiple sub folder for each section(Year/Month/Day)

        /** ========================CHECK IF DIRECTORY EXIST OR NOT========================
         * recursive necessary when creating multiple directories like YYYY/MM/DD
         * Normally we can use fs.mkdirSync(directory) but it will create only one directory like YYYY
         */
        const fullDirectory = path.normalize(DOCUMENT_ROOT_DIRECTORY + '/' + subFolders)
        if (!fs.existsSync(fullDirectory)) {
            fs.mkdirSync(fullDirectory, { recursive: true })
        }

        /** ========================CHECK SAME TYPE FILE======================== 
         * Suppose we uploaded pdf but we want to upload another file like jpg
         * When we replacing file we also need to change extension name
        */
        // if (previous_path) {
        //     previous_path = previous_path.replace(path.extname(previous_path), path.extname(file.name))
        // }

        console.log(typeof previous_path)
        console.log(Boolean(previous_path))
        const file_path = previous_path // previous_path exist means we are updating file
            ? previous_path // old file = subFolders + '/' + filename.ext
            : subFolders + '/' + CURRENT_TIMESTAMP + '_' + crypto.randomBytes(12).toString('hex') + path.extname(file.name) // filename.ext
        console.log(file_path)
        await file.mv(path.normalize(DOCUMENT_ROOT_DIRECTORY + '/' + file_path))
        return file_path
    } catch (error) {
        console.log(error)
        return false
    }
}

//================DELETE FILE FROM SERVER================
exports.unLinkFiles = (DOCUMENT_ROOT_DIRECTORY, filePathList = []) => {
    filePathList.forEach(path => {
        try {
            fs.unlinkSync(DOCUMENT_ROOT_DIRECTORY + '/' + path)
        } catch (error) {
            console.log(error)
        }
    })
}

exports.convertFromMultipartBody = (bodyObject) => {
    /**
     * Form data converts null value to 'null' string
     * So before sending to server we need to 'null' and '' to null
     */
    Object.keys(bodyObject).forEach((key) => {
        if (bodyObject[key] === 'null' || bodyObject[key] === '' || bodyObject === undefined || bodyObject === 'undefined')
            return bodyObject[key] = null
    })
    return bodyObject
}
