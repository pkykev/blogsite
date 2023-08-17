const router = require('express').Router();
// bring in user model to create new user when button is hit
const { User, Mail } = require('../models');
// calls in operators from sequelize
const { Op } = require("sequelize");
// we dont really need auth on the login page, however to use other parts we should as a requirement
const withAuth = require('../utils/auth');















module.exports = router;