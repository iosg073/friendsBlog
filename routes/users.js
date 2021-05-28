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

///////////////////
router.get('/profile/:index/newjob',ctrl.users.jobRrenderNew);
router.post('/profile/:index/newjob',ctrl.users.jobCreate);

router.get('/profile/:index/newpost',ctrl.users.postRrenderNew)
router.post('/profile/:index/newpost',ctrl.users.postCreate);



module.exports = router;
