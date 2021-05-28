const Job = require('../models').Job;
const User = require('../models').User;


//////////////////////////////////////////////

const jobsHome = (req, res) => {
    res.render('jobs/jobsHome.ejs')
}






////////////////////////////////////////////

const jobsShowAll = (req, res) => {
    Job.findAll().then(Jobs => {
        
        res.render('Jobs/showAllJobs.ejs',{Jobs:Jobs})
    })
}
////---------------///////

const jobsShowAllNoEDIT = (req, res) => {
    Job.findAll().then(Jobs => {
        
        res.render('jobs/showAllJobsNoEdit.ejs',{Jobs:Jobs})
    })

}
// // ///////////////////////////////////////////
///

// const jobRrenderNew = (req, res) => {

//     res.render('jobs/jobNew.ejs')
//  }

// // // ///////////////////////////////////////////

// const jobCreate = (req, res) => {

//     Job.create(req.body).then( newjob => {
//         res.redirect ('/jobs/alljobs');
//     })
// }
// /////////////////////////////////////////////////

const jobEditShow = (req, res) => {

    Job.findByPk(req.params.index).then(job =>{
        console.log(job)
        res.render('jobs/jobEditShow.ejs', {job})
    })
}

// ////////////////////////////////////////////////

const jobEdit = (req, res) => {
      
    Job.update (req.body, {

        where: {id: req.params.index},

        returning: true, }).then( jobUpdated => {
           

            res.redirect('/jobs/alljobs')
        })
    
       
      }




const jobDelete = (req, res) => {
    Job.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/jobs/alljobs');
    })
}

// ///////////////////////////////////////////////


 module.exports= {
    jobsShowAll,
    // jobRrenderNew,
    // jobCreate,
    jobEditShow,
    jobEdit,
    jobDelete,
    jobsHome,
    jobsShowAllNoEDIT
    
      



//     postRrenderNew,
//     postCreate,    
//     postEditShow,
//     postEdit,
//     postDelete
 }