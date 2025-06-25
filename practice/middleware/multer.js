const multer = require('multer');

const storage =multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const filename = file?.originalname?.replace(/\s+/g, '-');
    cb(null, filename);
  },
});
var fileFilter = (req, file, useCallback) => {
  console.log("File Filter: ", file.originalname);
if (!file.originalname.match(/\.(pdf|epub|djvu|PFD| EPUB|DJVU|png|PNG|jpeg)$/)) {
  return useCallback(new Error('Invalid file format'), false)
}
useCallback(null,true)       






}

const fileUpload = (fieldName) => (req, res, next) => {
  multer({
    storage,
    fileFilter: fileFilter,
   }).array(fieldName, 100) (req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    if (req.files) {
      console.log("Uploads Files: ");
      req.files.forEach(file => {
        console.log(`-${file.originalname} -> ${file.filename}`);
      });
    }
    next();
  });
}

module.exports = fileUpload;