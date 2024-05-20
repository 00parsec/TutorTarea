// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', userController.register);
router.post('/login', authController.login);
router.get('/profile', authMiddleware, userController.getProfile); // Ruta protegida para obtener el perfil

module.exports = router;

