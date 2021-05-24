const express = require('express');

const app = express();

app.use( express.static( 'public'));

app.get ('/', ( req, res ) => {
    res.render('homepage.ejs')
})




app.listen (3000, (req, res) => {
    console.log ("  I am listening at port 3000");
})