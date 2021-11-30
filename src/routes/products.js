const express = require('express');
const router = express.Router();
const controller = require('../controllers/products-controller');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTags);
router.post('/', controller.create);
router.put('/:id', controller.edit);
router.delete('/:id', controller.delete);

module.exports = router;
