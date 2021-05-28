const Post = require('../models').Post;
const User = require('../models').User;

////////////////////////////////////////////

const postsShowAll = (req, res) => {
    Post.findAll().then(posts => {
        
        res.render('posts/showAllPosts.ejs',{posts:posts})
    })
}


// // ///////////////////////////////////////////
///////

// const postRrenderNew = (req, res) => {

//     res.render('posts/new.ejs')
//  }

// // ///////////////////////////////////////////

// const postCreate = (req, res) => {

//     Post.create(req.body).then( newUser => {
//         res.redirect ('/posts/allposts');
//     })
// }
/////////////////////////////////////////////////

const postEditShow = (req, res) => {

    Post.findByPk(req.params.index).then(postEdit => {
       
        res.render('posts/postEditShow.ejs', { post:postEdit,
             p:req.params.induser})
    })
}

////////////////////////////////////////////////

const postEdit = (req, res) => {
      
    Post.update(req.body, {

        where: {id: req.params.index},

        returning: true, }).then( postUpdated => {
           

            res.redirect(`/users/profile/${req.params.induser}`)
        })
    
       
      }




const postDelete = (req, res) => {
    Post.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/posts/allposts');
    })
}

///////////////////////////////////////////////


//////////////////////
/////////////////////

const postDeleteUser = (req, res) => {
    Post.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect(`/users/profile/${req.params.index1}`);
    })
}


/////









/////////////////////
///////////////////

module.exports= {
    postsShowAll,
    // postRrenderNew,
    // postCreate,    
    postEditShow,
    postEdit,
    postDelete,
    //////
    postDeleteUser
   
}
