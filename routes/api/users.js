const express = require ('express')
const router = express.Router()
const User = require ('../../models/User')
const { check, validationResult} = require ('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require ('config')
const auth = require ('./auth')


// @Route           POST api/users
// @ Descriptions   Register user
// @access          Public

router.post('/', [
    check('name', "Name is required").not().isEmpty(),
    check('email', "Email is required").isEmail(),
    check('password', "Password needs to be at least 8 characters").isLength({ min: 8})]
    , async (req, res)=>{
//Check result and send back error messages
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
//if there is no error, then
// 1. check if there is existing user (email)
    const {name, email, password} = req.body;

    try{
        let user = await User.findOne({ email })
        if (user){
            return res.status(400).json({ errors: [{msg: "Email already registered, please log in"}] })
        }
        user = new User({name, email, password})

        //2. bcrypt password
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        await user.save()

        //generate jsonwebtoken
        const payload = {
            user:{
                id:user.id,
            }
        }

        jwt.sign(payload,config.get('jwtSecret'), (err, token)=>{
            if (err) throw err
            res.status(200).json( { token })
        })

    } catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
   
})

// @Route           GET api/users
// @ Descriptions   Get User data
// @access          Private

router.get('/', auth, async(req, res)=>{
    const userId = req.user.id
    try {
        const user = await User.findById(userId)
        console.log(user)
        res.json(user)
    }catch(err){
        res.status(500).send("Server Error")
    }

})


module.exports = router