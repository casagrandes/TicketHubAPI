const assetController = require('../assetController');
const db = require('../../models');

test('getAssets_NoCondition_ExpectArrayofAssets', async () => {
  const data = await assetController.getAssets();
  expect(data[0]).toHaveProperty('id');
  expect(data[0]).toHaveProperty('name');
  expect(data[0]).toHaveProperty('type');
  expect(data[0]).toHaveProperty('location');
  expect(data[0]).toHaveProperty('serialNumber');
  expect(data[0]).toHaveProperty('tagNumber');
  expect(data[0]).toHaveProperty('status');
  expect(data[0]).toHaveProperty('contact');
  expect(data[0].contact).toHaveProperty('email');
});

test('getAssetById_idOf1_ExpectSingleAssetObject', async () => {
  const data = await assetController.getAssetById(1);
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('name');
  expect(data).toHaveProperty('type');
  expect(data).toHaveProperty('location');
  expect(data).toHaveProperty('serialNumber');
  expect(data).toHaveProperty('tagNumber');
  expect(data).toHaveProperty('status');
  expect(data).toHaveProperty('contact');
  expect(data.contact).toHaveProperty('email');
  db.sequelize.close();
});