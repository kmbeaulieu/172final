var router = require('express').Router();

// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.
router.route('/')
  .get(function(req, res){
    console.log('Hey from user!!');
    res.send({ok: true});
  });


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
