'use strict';

// *****************************************************************
// Read all controllers/*/index.js and export them, dont touch this
// *****************************************************************

const humps = require('humps');
const fs = require('fs');

let controllerPath = `${__dirname}/../controllers`;
let controllerFolders = fs.readdirSync(controllerPath);
let controller = {};

controllerFolders.forEach(function(folderName){
  let controllerName = humps.camelize(folderName);
  controller[controllerName] = {};
  let methodFiles = fs.readdirSync(`${controllerPath}/${folderName}/`);

  methodFiles.forEach(function(fileName) {
    if (fileName.includes('.js')) {
      let methodName = humps.camelize(fileName).replace('.js','');
      controller[controllerName][methodName] = require(`${controllerPath}/${folderName}/${fileName}`);
    }
  });
});

module.exports = controller;
