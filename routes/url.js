const express = require('express');
const {handleGenerateNewShortURL, handleGetLongUrlFromShortUrl, handleGetTotalNumberOfClicks} = require('../controllers/url');
const URL = require('../models/url');

const router = express.Router();

router.post('/', handleGenerateNewShortURL);
router.get('/:shortId', handleGetLongUrlFromShortUrl);
router.get('/analytics/:shortId', handleGetTotalNumberOfClicks);

module.exports = {router};