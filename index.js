'use strict';

const acs = require('./acs');
const dssl = require('./dssl');
const mlp = require('./mlp');
const workshop = require('./workshop');
const whatsapp = require('./whatsapp');
const ctp = require('./ctp');
const web = require('./web');
const nucleus = require('./nucleus');
const mockTest = require('./mock-test');
const upscBnat = require('./upsc-bnat');
const gmap = require('./gmap');
const notification = require('./notification')

module.exports = {
    acs,
    dssl,
    mlp,
    workshop,
    whatsapp,
    ctp,
    web,
    mockTest,
    upscBnat,
    nucleus,
    gmap,
    notification
};