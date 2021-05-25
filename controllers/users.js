const User = require('../models').User;

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
        res.redirect (`/users/profile/${newUser.id}`);
    })
}

//////////////////////////////////////////////

const renderProfile = (req,res) => {

    User.findByPk(req.params.index).then( foundUser => {
        
        res.render('users/profile.ejs', { user:foundUser});

    })
    
}
////////////////////////////////////////////////

const userDelete = ( req, res) => {
    User.destroy( { where : { id: req.params.index}}).then(() =>{
        res.redirect('/')
    })
}

////////////////////////////////////////////////

const userLogin= (req,res) => {
    res.render('users/login.ejs')
}


//////////////////////////////////////////////

const login = (req, res) => {
    User.findOne( { where: { username: req.body.username}}).then (user =>{
        res.redirect(`/users/profile/${user.id}`);
        // res.render('users/Profile.ejs',{ user:user} )
    })


}
const userEdit = (req, res) => {

}



module.exports ={
    showAllUsers,
    userSignUp,
    userCreate,
    renderProfile,
    userDelete,
    userLogin,
    login
}