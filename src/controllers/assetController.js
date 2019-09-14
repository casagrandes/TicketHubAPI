const db = require('../models');

// get all assets
exports.getAssets = async () => {
  try {
    const assets = await db.Asset.findAll({
      include: [{model: db.Contact, as: 'contact'}]
    });
    return assets
  } catch(err) {
    throw err;
  }
}

// get asset by ID
exports.getAssetById = async (args) => {
  try {
    const asset = await db.Asset.findByPk(args, {
      include: [{model: db.Contact, as: 'contact'}]
    });
    return asset
  } catch(err) {
    throw err;
  }
}