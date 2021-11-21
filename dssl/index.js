const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose')

const basename = path.basename(module.filename);

const models = {};
function importPackages(prefix) {
    fs.readdirSync(`${__dirname}`)
        .filter(function (file) {
            return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
        })
        .forEach(function (file) {
            let schema = require(path.join(__dirname, file));
            const modelName = file.split(".")[0];
            models[modelName] = mongoose[prefix].model(modelName, schema);
        });
}

importPackages("dssl");

module.exports = models;
