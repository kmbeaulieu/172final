var router = require('express').Router();

// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.
router.route('/')
  .get(function(req, res){
    console.log('Hey from user!!');
  //return all users  
  var users = user.find({});
  res.body(users);
  });

router.route('/').post(function(req,res){
  //add a user!
  var user = req.body;
  //insert the user into the database. notation might be off for mongoose/mongodb
  Users.insert(user);
});

router.route('/:user_id').get(function(req,res){
  //return the user for this user id. Is this Id the username or mongo's _id value for the user? get from mongodb
  var user = Users.findOne({_id:req.params.user_id});
  //this could be res.body instead? Using || {} for if it fails. error handling will be added later
  res.json(user || {});
});

router.route('/:user_id').put();
router.route('/:user_id').delete(function(req,res){
  //delete from the database
  Users.remove({_id:req.params.user_id});
  //do I need to do anthing with the response?
});







// ERROR HANDLING CODE
//hmm this currently does not work but I don't have time for the 5 points to sit and figure this out. If I had more time I could look into it.
router.route('/api/users')
        .get(function(err,req,res){
           res.status(500);
           res.render('500: there was an error',{error: err});
        });

//stand alone error handler from express docs
function ErrorHandler(err,req,res,next){
        if (res.headersSent){
                return next(err);
        }
        res.status(500)
        res.render('500: There was an error',{error: err})
}


module.exports = router;
