const router = require('express').Router();
const Usercontrol = require('../controllers/usercontrol');
const { getAllUsers } = require('../controllers/usercontrol');

const authGuard = require('../middleware/authguagrd');
const isAdmin = require('../middleware/isAdmin');
const fileUpload = require('../middleware/multer');

const product = require('../product/product');

router.post('/createuser', fileUpload("image"), Usercontrol.createUser);
router.get('/product', product.product);
router.get('/getallusers/',authGuard, isAdmin, getAllUsers);

router.get('/getuser/:id', Usercontrol.findUserById);

router.post('/login', Usercontrol.loginUser);

router.put('/updateuser/:id',fileUpload("image"), Usercontrol.updateduser);
router.delete('/deleteuser/:id', Usercontrol.deleteuser);

module.exports = router;
