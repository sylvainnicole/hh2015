'use strict';

var menuparser = require("./menuparser.js");
var menu = new menuparser("../config/menuitems.json");

var express = require('express');
var router = express.Router();
//console.log(menu.retrieveItemPerType("soup"));
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' }) });
router.get('/:type', function(req, res) {
    res.json(menu.retrieveItemPerType(req.params.type)) });

module.exports = router;