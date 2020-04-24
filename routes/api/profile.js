const express = require ('express')
const router = express.Router()
const auth = require ('../../middleware/auth')
const Profile = require ('../../models/Profile')
const { check, validationResult} = require ('express-validator')


//@route Get api/profile/me
//@desc     get current user profile after login (dashboard)
// Private

router.get('/me', auth, async (req, res)=>{
    const userId = req.user.id
    try{
        const profile = await Profile.findOne({user: userId})
        if(!profile){
            return res.json("Please create a profile")
        }
        res.json(profile)

    }
    catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")

    }

})

//@route    POST api/profile/me
//@desc     Create User profile (dashboard)
// Private

router.post('/me', [ auth, [
    check('bio').exists(),
    check('location').exists()
]], async (req, res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }

    const userId = req.user.id
    const { bio, location } = req.body
    try{
        const profile = new Profile({
            user: userId,
            bio,
            location
        })
        await profile.save()
        res.json(profile)
       

    } catch(err){
        res.status(500).send("Server Error")
    }
    
})
module.exports = router