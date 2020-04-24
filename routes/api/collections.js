const express = require ('express')
const router = express.Router()
const Theme = require('../../models/Theme')
const { check, validationResult} = require ('express-validator')
const auth = require ('../../middleware/auth')
const Profile = require('../../models/Profile')

// @Route           GET api/collections
// @ Descriptions   Read all collections
// @access          Public

router.get('/', async (req, res)=>{
    try{
        const themes = await Theme.find()
        res.json(themes)
    }
    catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})


// @Route           GET api/collections/:id
// @ Descriptions   Read collections by ID
// @access          Public

router.get('/:id', async (req, res)=>{
    try{
        const theme = await Theme.findById(req.params.id)
        if (theme.authRequired){
            return res.json({newUrl: `api/collections/restrictedCollections/${req.params.id}`})
        }
        res.json(theme)
    }
    catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @Route           GET api/restrictedCollections/:id
// @ Descriptions   Read collections by ID (needed login)
// @access          Private

router.get('/restrictedCollections/:id', auth, async (req, res)=>{
    try{
        const theme = await Theme.findById(req.params.id)
        res.json(theme)
    }
    catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})


// @Route           POST api/collections
// @ Descriptions   Create collections
// @access          Public

router.post('/createCollections', [
    check('name', "Please enter the collection name").exists(),
    check('authRequired', "Value is invalid").isBoolean(),
    check('authRequired', "Please specify if login is required").exists()
], async (req, res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }

    const { name, authRequired } = req.body
    try{
        const theme = new Theme ({
            name,
            authRequired
        })
        await theme.save()
        res.json(theme)  

    } catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @Route           POST api/createContent/:id
// @ Descriptions   Create collections
// @access          Public

//5ea3360e28d35e597ed17254 : basic collection



router.post('/createContent/:id', [
    check("dutch", "Please enter dutch phrase/verb").exists(),
    check("en", "Please enter english translation").exists()
], async (req, res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array()})}
    
    const themeId = req.params.id
    const { dutch, en } = req.body
    try{
        const theme = await Theme.findById(themeId)
        if (!theme){
            return res.status(400).send("No collection is found")
        }
        const newContent = { dutch, en}
        theme.content.push(newContent)
        await theme.save()
        res.json(theme)

    } catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @Route           POST api/collections/addCollections/:id
// @ Descriptions   User can add this to their favourites
// @access          Private
// basic conversation theme: 5ea3360e28d35e597ed17254

router.post('/addCollections/:id', auth, async (req, res)=>{
    const themeId = req.params.id
    const userId = req.user.id
    try{
        const theme = await Theme.findById(themeId)
        // check if the current User already add this collections to favourites
        const isFollowed = theme.followers.filter(follower=> follower.id === userId)
        if (isFollowed.length>0){
            return res.status(400).json({msg: "You have already followed this collection"})
        }

        theme.followers.push(userId)
        await theme.save()

        const curProfile = await Profile.findOne({user: userId})
        curProfile.favourites.push(themeId)
        await curProfile.save()

        res.json(theme)


    } catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @Route           POST api/collections/removeCollections/:id
// @ Descriptions   User remove this from their favourites
// @access          Private
// basic conversation theme: 5ea3360e28d35e597ed17254

router.delete('/removeCollections/:id', auth, async (req, res)=>{
    const themeId = req.params.id
    const userId = req.user.id
    try{
        const theme = await Theme.findById(themeId)
        // check if the current User already add this collections to favourites
        const isFollowed = theme.followers.map(follower=> follower.id === userId)
        if (!isFollowed){
            return res.status(400).json({msg: "You haven't followed this collection"})
        }

        theme.followers = theme.followers.filter(follower => follower === userId)
        await theme.save()

        const curProfile = await Profile.findOne({user: userId})
        curProfile.favourites = curProfile.favourites.filter(fav => fav.id !== themeId)
        await curProfile.save()

        res.json(theme)


    } catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})



module.exports = router