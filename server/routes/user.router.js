const userController = require('../controllers/user.controller.js'),
    express = require('express'), 
    router = express.Router()
var User = require("../models/customer.model")
const passport = require('passport');
var crypto = require('crypto');
var LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');

bodyParser.urlencoded({
    extended: true
});

router.get('/login', (req, res, next) => {
   
    const form = '<h1>Login Page</h1><form method="POST" action="/auth/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';
    res.send(form);

});
// router.post('/login', function(req, res, next) {
//     passport.authenticate('local', function(err, user, info) {
//       if (err) { return next(err); }
//       // if user is not found due to wrong username or password
//       if (!user) {
//         return res.redirect('/auth/login-failure');
//       }
//       //passport.js has a logIn user method
//       req.logIn(user, function(err) {
//         if (err) { return next(err); }
  
//         return res.redirect('/auth/login-success');
//       });
//     })(req, res, next);
//   });
// router.post('/login', (req, res, next) => {
//     console.log(req.body.username);
//     console.log(req.password);
//     res.send(req.username);
// });
router.post('/login', passport.authenticate('local', { failureRedirect: '/auth/login-failure', successRedirect: '/auth/login-success' }));
router.get('/register', (req, res, next) => {

    const form = '<h1>Register Page</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);
    
});
router.post('/register', (req, res) => {
    // console.log(req.body.username);
    // console.log(req.body.password);
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/auth/login");
        });
    });
});
router.get('/protected-route', (req, res, next) => {
    
    // This is how you check if a user is authenticated and protect a route.  You could turn this into a custom middleware to make it less redundant
    if (req.isAuthenticated()) {
        res.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>');
    } else {
        res.send('<h1>You are not authenticated</h1><p><a href="/auth/login">Login</a></p>');
    }
});
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/auth/protected-route');
});
router.get('/login-success', (req, res, next) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});
router.get('/login-failure', (req, res, next) => {
    res.send('You entered the wrong password.');
});


module.exports = router;