const User = require('../models').User;
const Post= require('../models').Post;
const Job= require('../models').Job;


///////////////////////////////////////

const showAllUsers = ( req, res) => {

    User.findAll().then ( users => {

       res.render('users/allUsers.ejs', {users})

    })
 }

///////////////////////////////////////////

const userSignUp = (req, res) => {

    res.render('users/signup.ejs')
}

///////////////////////////////////////////

const userCreate = (req, res) => {

    User.create(req.body).then( newUser => {
        // res.redirect (`/users/profile/${newUser.id}`);
        res.redirect('/users/login')
    })
}

//////////////////////////////////////////////

const renderProfile = (req,res) => {

    User.findByPk(req.params.index, {

        include: [{ model:Post, attributes:['id', 'title', 'postbody']},
        { model:Job, attributes:['id', 'title', 'detail','img']}]
       
        


    }).then( foundUser => {
        
        console.log(foundUser)
        res.render('users/profile.ejs', { user:foundUser});

    })
    
}
////////////////////////////////////////////////

const userDelete = ( req, res) => {
    User.destroy( { where : { id: req.params.index}}).then(() =>{
        res.redirect('/users/usersdetail')
    })
}

////////////////////////////////////////////////

const userLogin= (req,res) => {
    res.render('users/login.ejs')
}


//////////////////////////////////////////////


const login = (req, res) => {

    User.findOne( { where: {
         username: req.body.username, 
         password: req.body.password
        }
    }).then ((user) =>{
        if(user){

         res.redirect(`/users/profile/${user.id}`);
        }
        else
        {
            res.redirect('/users/login');
        }
        
        })       

       }

////////////////////////////////////////////////

const userEdit = (req, res) => {
    User.update(req.body, {
        where: {
            id:req.params.index
        },
        returning:true
    }).then(updatedUser => {
        console.log(updatedUser[1][0].id);
        res.redirect(`/users/profile/${updatedUser.id}`)
    })

}

//////
/////

// ///////////////////////////////////////////

const postRrenderNew = (req, res) => {

    res.render('posts/new.ejs',{id:req.params.index})
 }

// ///////////////////////////////////////////

const postCreate = (req, res) => {
    req.body.userid=req.params.index

    Post.create(req.body).then( newUser => {
        // res.redirect ('/posts/allposts');
        res.redirect(`/users/profile/${req.params.index}`)
    })
}

///////
//////



const jobRrenderNew = (req, res) => {

    res.render('jobs/jobNew.ejs',{id:req.params.index})
 }

// // ///////////////////////////////////////////

const jobCreate = (req, res) => {

    req.body.userid=req.params.index

    Job.create(req.body).then( newjob => {
        res.redirect (`/users/profile/${req.params.index}`);
    })
}
////////////
////////////
module.exports ={
    showAllUsers,
    userSignUp,
    userCreate,
    renderProfile,
    userDelete,
    userLogin,
    login,
    userEdit,
    postCreate,
    postRrenderNew ,
    jobRrenderNew,
    jobCreate
    
}