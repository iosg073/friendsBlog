const Job = require('../models').Job;

////////////////////////////////////////////

const jobsShowAll = (req, res) => {
    Job.findAll().then(Jobs => {
        
        res.render('Jobs/showAllJobs.ejs',{Jobs:Jobs})
    })
}


// // ///////////////////////////////////////////

// const postRrenderNew = (req, res) => {

//     res.render('Jobs/new.ejs')
//  }

// // ///////////////////////////////////////////

// const postCreate = (req, res) => {

//     Job.create(req.body).then( newUser => {
//         res.redirect ('/Jobs/allJobs');
//     })
// }
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
    jobsShowAll
//     postRrenderNew,
//     postCreate,    
//     postEditShow,
//     postEdit,
//     postDelete
 }