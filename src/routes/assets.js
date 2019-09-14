const express = require('express');
const router = express.Router();
const verifyAuth = require('./verifyToken');

const assetController = require('../controllers/assetController');

router.get('/', async (req, res, next) => {
  const assets = await assetController.getAssets()
  res.json(assets);
});

router.get('/:id', async (req, res, next) => {
  console.log(req.params.id)
  const asset = await assetController.getAssetById(req.params.id)
  res.json(asset);
});

module.exports = router;