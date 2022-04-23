const router = require("express").Router()
const Carcollection = require("../model/carcollection.model")



router.post("/", async (req, res) => {
    try {
        var car = req.body
        const newcar = await new Carcollection(car).save().then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(newcar)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const allcar = await Carcollection.find({}).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(allcar)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("/:postid", async (req, res) => {
    const { postid } = req.params
    console.log(postid)
    try {
        const allcar = await Carcollection.find({ "postid": postid }).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(allcar)
    } catch (error) {
        return res.status(500).send(error)
    }
})



module.exports = router
