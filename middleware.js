const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

let avaterName = uuidv4();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './avatar');
  },
  filename: (req, file, cb) => {
    cb(null, avaterName + '--' + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

module.exports = { avaterName, upload };
