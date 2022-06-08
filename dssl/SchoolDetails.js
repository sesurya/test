'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SchoolDetails = new Schema({
	name: String,
	schoolId: String,
	universalId: String,
	address: String,
	city: {
		cityId: String,
		cityName: String
	},
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
	},
	userDetails: {
		name: String,
		email: String,
		phoneNumber: String
	}
}, {
	collection: 'school-details',
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
});

SchoolDetails.plugin(paginate);
SchoolDetails.plugin(aggregatePaginate);

module.exports = SchoolDetails;