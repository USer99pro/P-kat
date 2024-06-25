const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

//http://127.0.0.1:3000/student/

router.get('/', userController.allstudent);

//http://127.0.0.1:3000/student/kat
router.get('/kat', userController.kat),

//http://127.0.0.1:3000/student/tong
router.get('/tong', userController.tongs),

//http://127.0.0.1:3000/student/gift
router.get('/gift', userController.gifts), 
  
module.exports = router;  

//ฟังชั่น