'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherDetail = new Schema({
  fname: String,
  lname: String,
  nameDescription: String,
  yourTeacher: String,
  imgUrl: String,
  gender: String,
  salutation: String,
  profileTitle: String,
  description: String,
  teacherExpYrs: String,
  teacherExpDesc: String,
  info: Object,
});

const subjectDetail = new Schema({
  name: String,
});

const cardConfig = new Schema({
  cardId: String,
  cardColor: String,
  cardBottomText: String,
  cardRightsideText: String,
  cardImage: String,
  registrationButtonOpenText: String,
  registrationButtonClosedText: String,
  teacherDetail: teacherDetail,
  subjectdetail: subjectDetail,
}, {
  collection: 'cardconfigs',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = cardConfig;
