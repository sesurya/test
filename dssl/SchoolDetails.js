'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const schoolDetailModel = new Schema({
	name: String,
	uniqueId: String,
	address: String,
	city: String,
	state: String,
	pincode: String,
	classInfo: {
		class3: Number,
		class4: Number,
		class5: Number,
		class6: Number,
		class7: Number,
		class8: Number,
		class9: Number,
		class10: Number,
	},
	testDate: {
		date1: String,
		date2: String
	}
});

schoolDetailModel.plugin(paginate);
schoolDetailModel.plugin(aggregatePaginate);

module.exports = schoolDetailModel;