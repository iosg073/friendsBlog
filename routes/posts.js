const express = require('express')
const router = express.Router();
const ctrl =require('../controllers')

router.get('/allposts',ctrl.posts.postsShowAll)
router.get('/newpost',ctrl.posts.postRrenderNew)
router.post('/newpost',ctrl.posts.postCreate);

router.get('/allposts/:index/edit',ctrl.posts.postEditShow);
router.put('/allposts/:index',ctrl.posts.postEdit);
router.delete('/allposts/:index', ctrl.posts.postDelete);
///////
//////
router.delete('/allposts/:index/e', ctrl.posts.postDeleteUser);

//////
//////





module.exports = router;






