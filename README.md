






# Project Title:  Friends Blog
# Description:
This project, _Friends Blog_ has developed to showcase and solidify skills of NodeJS and Express by implementing MVC (Model, View, Controller) architecture along EJS (Embedded Java Script), ORM (object Relational Model), SQL, Sequelize and PostgreSQL as backend.  This project has provided me a chance to work as independent developer under the supervision of *instructor* and working in group environment but focused to achieve individual tasks.

image of MVC 

The _Friends Blog_ site allows friends to register by creating user name and password. Each user can create a blog entry for all other user to read, commit or like. The Users also share their professional portfolio by submitting company image and job description. A niece to have features like Hobby is under production. 

# ERD
![friendsBlog ERD](https://github.com/iosg073/friendsBlog/blob/main/friendsBlog-ERD.PNG)

erd

# Wire Frame
![WireFrame](https://github.com/iosg073/friendsBlog/blob/main/FriendsBlog-WireFrame.PNG)

# Examples 
* Main Page 

![Main page](https://github.com/iosg073/Project-1-Game.github.io/blob/master/mainPage.png " Ttitle")

* Word submit interface  

![Main page](https://github.com/iosg073/Project-1-Game.github.io/blob/master/userword.jpg)

* Word guess interface

![Main page](https://github.com/iosg073/Project-1-Game.github.io/blob/master/guessWord.jpg)

* Work in progress

![Main page](https://github.com/iosg073/Project-1-Game.github.io/blob/master/workInProgress.jpg)


# EJS Code 
```html
<form class="formBrd" action="/users/signup" method="POST">	
              <br> <br>

               <label  class="labelst" for="id1"> Name :</label><input  id="id1" type="text" name="name" placeholder="Full Name" /><br> <br>  
               <label  class="labelst" for="id2"> User ID :</label> <input id="id2" type="text" name="username" placeholder="Username" /><br><br>
               <label  class="labelst" for="id3"> Password :</label> <input id="id3" type="password" name="password" placeholder="Password" /><br><br>
               <label  class="labelst" for="id4"> Email :</label><input id="id4" type="email" name="email" placeholder="Email" />  <br><br> 
               <label  class="labelst" for="id5"> About Me :</label><input id="id5" type="text" name="aboutMe" placeholder="About" /><br><br>
               <label  class="labelst" for="id6"> Photo <i>url</i> :</label><input id="id6" type="text" name="photo" placeholder=" Image url" /><br><br>
               <label  class="labelst" for="id7"> Phone :</label><input id="id7" type="text" name="phone" placeholder="Phone" /><br><br>
               <label  class="labelst" for="id8"> Address :</label><input id="id8" type="text" name="address" placeholder="address" /> <br><br>             
                        
                             
                <input class="btn btn-primary my-2" type="submit" value="CREATE ME" />
            </form>
            
```
# Bootstrap Code 
```css
    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

  }
 ```
 # javaScript Code
 ```javaScript 
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>  

 ```
 # User Controller Code
 
 ```javaScript 
const postRrenderNew = (req, res) => {

    res.render('posts/new.ejs',{id:req.params.index})
 }

const postCreate = (req, res) => {

    req.body.userid=req.params.index

    Post.create(req.body).then( newUser => {
     
        res.redirect(`/users/profile/${req.params.index}`)
    })
}

const jobRrenderNew = (req, res) => {

    res.render('jobs/jobNew.ejs',{id:req.params.index})
 }

const jobCreate = (req, res) => {

    req.body.userid=req.params.index

    Job.create(req.body).then( newjob => {
    
        res.redirect (`/users/profile/${req.params.index}`);
    })
}              
 ```
 # User Router Code
 
 ```javaScript 
 router.get('/usersdetail', ctrl.users.showAllUsers);

router.get('/signup',ctrl.users.userSignUp);

router.post('/signup',ctrl.users.userCreate);

router.get('/profile/:index',ctrl.users.renderProfile);

router.get('/login',ctrl.users.userLogin);

router.post('/login',ctrl.users.login);

router.put('/profile/:index', ctrl.users.userEdit);

router.delete('/:index', ctrl.users.userDelete);

router.get('/profile/:index/newjob',ctrl.users.jobRrenderNew);

router.post('/profile/:index/newjob',ctrl.users.jobCreate);

router.get('/profile/:index/newpost',ctrl.users.postRrenderNew)

router.post('/profile/:index/newpost',ctrl.users.postCreate);
         
 ```
 # Tecnologies used
 1. ## VS Code
 2. ## HTML
 3. ## CSS
 4. ## JavaScript
 5. ## Snipping tool
 6. ## Lucidchart 
 7. ## Git  Hub Git Bash
 8. ## NodeJS Express
 9. ## Sequelizer
 10. ## PostgreSQL
 11. ## bootstrap
 
 

# Installation: 
* Site is available live at [FriendBlog](https://github.com/iosg073/friendsBlog.git/)

* To get local copy on your system follow following instructions.
   1. Fork and clone the repository at [click](https://github.com/iosg073/Project-1-Game.github.io.git)
   2. Create Database
   
```javaScript 
 {
  "development": {
    "username": "postgres",
    "password": "noah32",
    "database": "friendsblog",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
  
}
                     
 ```

 3. Run npm install 
 4. Make migration npx sequelize db:migrate
 5. Get seed data  npx sequelize db:seed:all
 
# Credit 

* Casey , Leo and David 
* Members of Squad 2 (Margie and Kumar)
* [Google](Google.com) 
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

* [Stackoverflow](https://stackoverflow.com/)
* [Youtube](Youtube.com)



