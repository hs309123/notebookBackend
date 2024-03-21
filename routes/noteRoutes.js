const { Router } = require("express")
const noteController = require("../controller/noteController")

const router = Router()

router.post("/createNote", noteController.createNote)
router.get("/getNote", noteController.getNote)
router.put("/updateNote", noteController.updateNote)
router.delete("/deleteNote", noteController.deleteNote)

module.exports = router

