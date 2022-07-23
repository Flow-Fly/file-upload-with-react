const router = require("express").Router()
const Duck = require("../models/RubberDucks.model")
const uploader = require("../config/cloudinary")
//! Routes are prefixed with /api

router.get("/rubberducks", async (req, res, next) => {
	try {
		res.status(200).json(await Duck.find())
	} catch (error) {
		next(error)
	}
})

router.post(
	"/rubberducks",
	uploader.array("picture"),
	async (req, res, next) => {
		try {
			// if (req.file) {
			//   req.body.picture = req.file.path
			// } else {
			//   req.body.picture = 'An other picture'
			// }
			console.log(req.files)
			const pictures = req.files.map((pic) => pic.path)

			const newDuck = await Duck.create({
				...req.body,
				picture: pictures,
			})

			res.status(201).json({ message: "Successfully created !" })
		} catch (error) {
			res.status(500).json({ message: error })
		}
	}
)

router.get("/rubberducks/:id", async (req, res, next) => {})

router.patch("/rubberducks/:id", async (req, res, next) => {})

router.delete("/rubberducks/:id", async (req, res, next) => {})

module.exports = router
