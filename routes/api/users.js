const express = require('express');
const router = express.Router();
const {
	checkToken,
	dataController,
	apiController
} = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// PUT /api/users
router.put('/', dataController.signUp, apiController.auth);
// POST /api/users/guest 
router.post('/guest', dataController.createGuest, apiController.auth);
// POST /api/users/login
router.post('/login', dataController.login, apiController.auth);
// PUT /api/users/:id
router.put('/update', dataController.update, apiController.auth);
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken);
// DELETE /api/users/:id
router.delete('/:id', dataController.deleteUser, apiController.auth);

module.exports = router;
