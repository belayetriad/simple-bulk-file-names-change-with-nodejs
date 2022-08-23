const { readdirSync, rename } = require('fs');
const { resolve } = require('path');
const fileController = {};

// Keep all files inside the folder
const folderName = 'files';
const removableFileName = '_500x500'; // If you dont want add extra name leave it blank
const extraFileName = '_300x300'; // If you dont want add extra name leave it blank

// Get path to image directory
const fileDirPath = resolve(process.cwd(), folderName);

// Get an array of the files inside the folder
const files = readdirSync(fileDirPath);

// Make View method for file view
const  makeViewHtml = (html) => {`<div><ul>${html}</ul></div>`};

// Get All FIles from Selected Folder Controller
fileController.getAll = (req, res) => { 
    res.render('files/index', {
        files: files,
        fileDirPath: fileDirPath
    });
}

fileController.renameAll = (req, res) => { 
    files.forEach(file => {
        rename(
            fileDirPath + `/${file}`,
            fileDirPath + `/${file.replace(removableFileName,extraFileName)}`,
            (err) => {
                if(err){
                    console.log(err)
                }else{ 
                    res.status(200).json('Completed;');
                }
            }
        ) 
    });
    
}

 

module.exports = fileController;