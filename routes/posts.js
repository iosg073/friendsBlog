const express = require('express')
const router = express.Router();
const ctrl =require('../controllers')

router.get('/allposts',ctrl.posts.postsShowAll)
// router.get('/newpost',ctrl.posts.postRrenderNew)
// router.post('/newpost',ctrl.posts.postCreate);

router.get('/allposts/:index/:induser/edit',ctrl.posts.postEditShow);
router.put('/allposts/:index/:induser/edit',ctrl.posts.postEdit);
router.delete('/allposts/:index', ctrl.posts.postDelete);
///////
//////
router.delete('/allposts/:index/:index1/delite', ctrl.posts.postDeleteUser);

//////
//////





module.exports = router;






