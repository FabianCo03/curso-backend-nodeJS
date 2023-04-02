const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      toys: 'ball',
      clothes: 'shirt',
    },
  ]);
});

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
  });
});

module.exports = router;
