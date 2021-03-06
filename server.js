const express = require('express');

const app = express();

// Express middleware
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));


const routes = require('./routes');

app.use( express.static( 'public'));

app.use('/users', routes.users)
app.use('/posts',routes.posts)
app.use('/jobs',routes.jobs)


app.get ('/', ( req, res ) => {
    res.render('homepage.ejs')
})




app.listen (3000, (req, res) => {
    console.log ("  I am listening at port 3000");
})