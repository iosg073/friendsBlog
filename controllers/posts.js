const Post = require('../models').Post;

////////////////////////////////////////////

const postsShowAll = (req, res) => {
    Post.findAll().then(posts => {
        
        res.render('posts/showAllPosts.ejs',{posts:posts})
    })
}


// ///////////////////////////////////////////

const postRrenderNew = (req, res) => {

    res.render('posts/new.ejs')
 }

// ///////////////////////////////////////////

const postCreate = (req, res) => {

    Post.create(req.body).then( newUser => {
        res.redirect ('/posts/allposts');
    })
}
/////////////////////////////////////////////////

const postEditShow = (req, res) => {

    Post.findByPk(req.params.index).then(post =>{
        console.log(post)
        res.render('posts/postEditShow.ejs', {post})
    })
}

////////////////////////////////////////////////

const postEdit = (req, res) => {
      
    Post.update (req.body, {

        where: {id: req.params.index},

        returning: true, }).then( postUpdated => {
           

            res.redirect('/posts/allposts')
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


module.exports= {
    postsShowAll,
    postRrenderNew,
    postCreate,    
    postEditShow,
    postEdit,
    postDelete
    
}
