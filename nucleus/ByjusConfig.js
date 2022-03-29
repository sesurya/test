const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate')

const ByjusConfig = mongoose.Schema({
    configName: { type: String, required: true },
    app: { type: String, required: true },
    config: Object
}, {
    timestamps: true,
    collection: 'byjus_configs'
});

ByjusConfig.plugin(paginate);
ByjusConfig.plugin(mongooseAggregatePaginate);

module.exports = ByjusConfig;
