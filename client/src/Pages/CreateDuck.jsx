import React, { useState } from "react"
import axios from "axios"

const CreateDuck = () => {
	const [name, setName] = useState("")
	const [material, setMaterial] = useState(-1)
	// const [picture, setPicture] = useState(null);
	const [isCute, setIsCute] = useState(null)
	const [message, setMessage] = useState(null)
	const [picture, setPicture] = useState(null)

	const handleFileUpload = (e) => {
		// const tempArray = []
		// const files = Array.from(e.target.files)

		// files.forEach((file) => {
		// 	tempArray.push(file)
		// })
		setPicture([...e.target.files])
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const fd = new FormData()

		fd.append("name", name)
		fd.append("material", material)
		fd.append("isCute", isCute === "yes" ? true : false)
		/**
		 * MULTIPLE UPLOAD
		 */
		for (let pic of picture) {
			fd.append("picture", pic)
		}

		// This is just to log everything that is inside the FormData if you need to have access iy
		for (let [key, value] of fd.entries()) {
			console.log(key, value)
		}
		axios
			.post(process.env.REACT_APP_BACKEND + "/rubberducks", fd)
			.then((res) => {
				console.log(res)
				setMessage(res.data.message)
			})
			.catch((e) => console.log(e))
	}

	return (
		<form onSubmit={handleSubmit}>
			{message && <h2>{message}</h2>}
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="material">Material</label>
				<select
					name="material"
					value={material}
					onChange={(e) => setMaterial(e.target.value)}>
					<option value="-1" selected disabled>
						Please select something
					</option>
					<option value="gold">Gold</option>
					<option value="wood">Wood</option>
					<option value="plastic">Plastic</option>
				</select>
			</div>
			<div>
				<label htmlFor="picture">Picture</label>
				<input
					type="file"
					name="picture"
					multiple
					onChange={handleFileUpload}
				/>
			</div>
			<div>
				<label htmlFor="isCute">Is he/she cute ?</label>
				<input
					type="radio"
					name="isCute"
					id="yes"
					value={true}
					onChange={(e) => setIsCute(e.target.value)}
				/>
				<label htmlFor="yes">Yes !</label>
				<input
					type="radio"
					name="isCute"
					value={false}
					id="no"
					onChange={(e) => setIsCute(e.target.value)}
				/>
				<label htmlFor="no">No !</label>
			</div>

			<button>Create</button>
		</form>
	)
}

export default CreateDuck
