const express = require ('express')
const router = express.Router();
const ctrl = require ('../controllers');

router.get('/usersdetail', ctrl.users.showAllUsers);

router.get('/signup',ctrl.users.userSignUp);

router.post('/signup',ctrl.users.userCreate);

router.get('/profile/:index',ctrl.users.renderProfile);

router.get('/login',ctrl.users.userLogin);

router.post('/login',ctrl.users.login);

router.put('/profile/:index', ctrl.users.userEdit);

router.delete('/:index', ctrl.users.userDelete);



module.exports = router;
