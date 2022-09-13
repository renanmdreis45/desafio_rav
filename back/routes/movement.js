const express = require('express');
const router = express.Router();
const { getMovements, addMovement, deleteMovement } = require('../controllers/movements');

router
  .route('/')
  .get(getMovements)
  .post(addMovement);

router
  .route('/:id')
  .delete(deleteMovement);

module.exports = router;