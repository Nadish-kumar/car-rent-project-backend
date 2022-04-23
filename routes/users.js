const router = require("express").Router()
const User = require("../model/user.model")



router.post("/", async (req, res) => {
    try {
        var car = req.body
        const newuser = await new User(car).save().then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(newuser)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const alluser = await User.find({}).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(alluser)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("/:postid", async (req, res) => {
    const { postid } = req.params
    console.log(postid)
    try {
        const alluser = await User.find({ "postid": postid }).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(alluser)
    } catch (error) {
        return res.status(500).send(error)
    }
})



module.exports = router
