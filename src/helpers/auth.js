// object with multiple functions
const helpers = {};


// Authentication > midleware(req,res,next)
helpers.isAuthenticated = (req, res, next) => {
    // if is authenticated
    if(req.isAuthenticated()){
        // continuo with next iteraction
        return next();
    }
    // else
    req.flash('error_msg', 'No Autorizado');
    res.redirect('/users/signup');
}   


module.exports = helpers;