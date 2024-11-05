// routes/pageRoutes.js
const express = require('express');
const router = express.Router();
const { createPage, editPage, deletePage, getPages } = require('../controllers/pageController');

router.get('/pages', getPages);
router.post('/pages', createPage);
router.put('/pages/:id', editPage);
router.delete('/pages/:id', deletePage);

module.exports = router;
