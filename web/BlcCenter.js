'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const BlcCenter = new Schema({
    bannerImgDesktop: { type: String },
    bannerImgMobile: { type: String },
    centerAddress: {type: String },
    centerId: { type: Number, required: true },
    centerIframe: { type: String },
    centerImg: { type: String },
    centerName: { type: String },
    centerPhoneNumber: { type: String },
    centerSlug: { type: String },
    cityId: { type: Number, required: true },
    imageGallery : { type: String },
    mapAddress: { type: String },
    openTiming: { type: String }
}, {
  collection: 'blc_centers',
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
});

BlcCenter.plugin(paginate);
BlcCenter.plugin(aggregatePaginate);

module.exports = BlcCenter;