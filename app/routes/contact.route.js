const express = require('express');
const contacts = require('../controllers/contact.controller');

const router = express.Router();

router.route('/')
  .get(contacts.findAll) //cau 1
  .post(contacts.create) // cau 2
  .delete(contacts.deleteAll); // cau 3


router.route('/favorite')
  .get(contacts.findAllFavorite);

router.route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

module.exports = router;