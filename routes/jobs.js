const express = require('express')
const router = express.Router();
const ctrl =require('../controllers')


router.get('/',ctrl.jobs.jobsHome)
router.get('/alljobs',ctrl.jobs.jobsShowAll)
router.get('/alljobsnoEdit',ctrl.jobs.jobsShowAllNoEDIT)
// router.get('/newjob',ctrl.jobs.jobRrenderNew)
// router.post('/newjob',ctrl.jobs.jobCreate);

router.get('/alljobs/:index/edit',ctrl.jobs.jobEditShow);
router.put('/alljobs/:index',ctrl.jobs.jobEdit);
router.delete('/alljobs/:index', ctrl.jobs.jobDelete );



module.exports = router;


// { <form action="/Jobs/allJobs/<%=Jobs[i].id%>?_method=DELETE" method="POST">

// <a href="/Jobs/newpost"> <input type="button" value="Create Post" /></a>

// <a href="/Jobs/allJobs/<%=Jobs[i].id%>/edit"> <input type="button" value="Edit Post" /></a>

// <input type="submit" value="Delete User" />



// </form> }