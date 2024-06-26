/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-template */
const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
  'image/png': 'png',
};

const storage = multer.memoryStorage();

module.exports = multer({ storage: storage }).single('image');