const router = require("express").Router()
const Admin = require("../model/admin.model")



router.post("/", async (req, res) => {
    try {
        var car = req.body
        const newadmin = await new Admin(car).save().then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(newadmin)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const alladmin = await Admin.find({}).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(alladmin)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("/:postid", async (req, res) => {
    const { postid } = req.params
    console.log(postid)
    try {
        const alladmin = await Admin.find({ "postid": postid }).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(alladmin)
    } catch (error) {
        return res.status(500).send(error)
    }
})



module.exports = router
