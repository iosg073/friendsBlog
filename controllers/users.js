const User = require('../models').User;

const showAllUsers = ( req, res) => {

    User.findAll().then ( users => {

        console.log(users)

        res.render('users/allUsers.ejs', {users})
    })
}
module.exports ={
    showAllUsers
}