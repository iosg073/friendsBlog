const express = require('express')
const router = express.Router();
const ctrl =require('../controllers')

router.get('/alljobs',ctrl.jobs.jobsShowAll)
router.get('/newjob',ctrl.jobs.jobRrenderNew)
router.post('/newjob',ctrl.jobs.jobCreate);

// router.get('/allposts/:index/edit',ctrl.posts.postEditShow);
// router.put('/allposts/:index',ctrl.posts.postEdit);
router.delete('/alljobs/:index', ctrl.jobs.jobDelete );



module.exports = router;


// { <form action="/Jobs/allJobs/<%=Jobs[i].id%>?_method=DELETE" method="POST">

// <a href="/Jobs/newpost"> <input type="button" value="Create Post" /></a>

// <a href="/Jobs/allJobs/<%=Jobs[i].id%>/edit"> <input type="button" value="Edit Post" /></a>

// <input type="submit" value="Delete User" />



// </form> }