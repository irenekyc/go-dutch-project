const jwt = require ('jsonwebtoken')
const config = require ('config')

module.exports = function (req, res, next){
    // Get the token from header
    const token = req.header('x-auth-token')

    // Check if there is any token
    if (!token){
        return res.status(401).json( { msg: "Authorisation denied "})
    }

    //verify token
    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        
        req.user = decoded.user
        //payload has user
        next()

    }
    catch(err){
        res.status(401).json({ msg: "Token is not valid"})

    }
}