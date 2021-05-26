const express = require('express')
const router = express.Router();
const ctrl =require('../controllers')

router.get('/allposts',ctrl.posts.showAllPosts)
router.get('/newpost',ctrl.posts.renderNewpost)
router.post('/newpost',ctrl.posts.postCreate);
router.delete('/allposts/:index', ctrl.posts.deletePost);


module.exports = router;



// router.get('/profile/:index',ctrl.users.renderProfile);

// router.get('/login',ctrl.users.userLogin);

// router.post('/login',ctrl.users.login);

// router.put('/profile/:index', ctrl.users.userEdit);

// router.delete('/:index', ctrl.users.userDelete);

// action="/users/profile/<%=user.id%>?_method=PUT" method="POST"
// 