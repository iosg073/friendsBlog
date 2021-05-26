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
    jobRrenderNew,
    jobCreate,
    jobEditShow,
    jobEdit,
    jobDelete
    
      



//     postRrenderNew,
//     postCreate,    
//     postEditShow,
//     postEdit,
//     postDelete
 }