const express = require ('express')
const router = express.Router()
const auth = require ('../../middleware/auth')
const User = require ('../../models/User')
const { check, validationResult} = require ('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const config = require ('config')

// @Route           GET api/auth
// @ Descriptions   testing
// @access          Public

router.get('/', auth, async (req, res)=>{
    const userId = req.user.id
    try{
        const user = await User.findById(userId).select('-password')
        res.json(user)
    }
    catch(err){
        console.error(err.mesaage)
        res.status(500).send("Server Error")
    }
})

// @Route           POST api/auth
// @ Descriptions   Login
// @access          Public

router.post('/', [
    check('email', 'Please type in a valid email address').isEmail(),
    check('password', "Password is required").exists()
], async (req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    const { email, password } = req.body

    try{
        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }]})
        }
    // check password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(401).json({ errors: [{ msg: "Invalid Credentials" }]})
        }
    // Send back a token
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, config.get('jwtSecret'), (err, token)=>{
                if (err) throw err
                res.status(200).json({token})

            }
        )
        


    } catch(err){
        console.error(err.message)
    }
   
})


module.exports = router