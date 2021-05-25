const express = require('express');

const app = express();

const routes = require('./routes');

app.use( express.static( 'public'));

app.use('/users', routes.users)


app.get ('/', ( req, res ) => {
    res.render('homepage.ejs')
})




app.listen (3000, (req, res) => {
    console.log ("  I am listening at port 3000");
})