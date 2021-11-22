const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose')

const basename = path.basename(module.filename);

function importPackages(prefix) {
    const models = {};
    const modelLocation = path.join(__dirname, '..', prefix);
    fs.readdirSync(modelLocation)
        .filter(function (file) {
            return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
        })
        .forEach(function (file) {
            let schema = require(path.join(modelLocation, file));
            const modelName = file.split(".")[0];
            const dbInstance = mongoose[prefix];
            //console.log(modelName, dbInstance);
            //Only proceed if database instance exists during server bootstrapping
            if (dbInstance) {
                models[modelName] = mongoose[prefix].model(modelName, schema);
            }
        });

    return models;
}

module.exports = importPackages;