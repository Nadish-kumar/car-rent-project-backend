const router = require("express").Router()
const Report = require("../model/report.model")



router.post("/", async (req, res) => {
    try {
        var car = req.body
        console.log(car)
        const newReport = await new Report(car).save().then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(newReport)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const allReport = await Report.find({}).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(allReport)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("/:postid", async (req, res) => {
    const { postid } = req.params
    console.log(postid)
    try {
        const allReport = await Report.find({ "postid": postid }).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(allReport)
    } catch (error) {
        return res.status(500).send(error)
    }
})



module.exports = router
