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



module.exports ={
    showAllUsers,
    userSignUp,
    userCreate,
    renderProfile,
    userDelete,
    userLogin,
    login,
    userEdit
}