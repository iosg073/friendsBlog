const Job = require('../models').Job;

////////////////////////////////////////////

const jobsShowAll = (req, res) => {
    Job.findAll().then(Jobs => {
        
        res.render('Jobs/showAllJobs.ejs',{Jobs:Jobs})
    })
}


// // ///////////////////////////////////////////

const jobRrenderNew = (req, res) => {

    res.render('jobs/jobNew.ejs')
 }

// // ///////////////////////////////////////////

const jobCreate = (req, res) => {

    Job.create(req.body).then( newjob => {
        res.redirect ('/jobs/alljobs');
    })
}
// /////////////////////////////////////////////////

// const postEditShow = (req, res) => {

//     Job.findByPk(req.params.index).then(post =>{
//         console.log(post)
//         res.render('Jobs/postEditShow.ejs', {post})
//     })
// }

// ////////////////////////////////////////////////

// const postEdit = (req, res) => {
      
//     Job.update (req.body, {

//         where: {id: req.params.index},

//         returning: true, }).then( postUpdated => {
           

//             res.redirect('/Jobs/allJobs')
//         })
    
       
//       }




// const postDelete = (req, res) => {
//     Job.destroy({
//         where: {id: req.params.index}
//     })
//     .then(() => {
//         res.redirect('/Jobs/allJobs');
//     })
// }

// ///////////////////////////////////////////////


 module.exports= {
    jobsShowAll,
    jobRrenderNew,
    jobCreate
//     postRrenderNew,
//     postCreate,    
//     postEditShow,
//     postEdit,
//     postDelete
 }