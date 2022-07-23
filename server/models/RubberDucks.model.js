const { model, Schema } = require("mongoose")

const rubberDuckSchema = new Schema({
	name: String,
	material: {
		type: String,
		enum: ["gold", "wood", "plastic"],
	},
	picture: [String],
	isCute: Boolean,
})

module.exports = model("rubberduck", rubberDuckSchema)
