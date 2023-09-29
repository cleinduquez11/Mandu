
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `Storage`)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + file.originalname
      req.UNIQUESUFFIX = uniqueSuffix;
      cb(null, uniqueSuffix )
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = { upload, storage}