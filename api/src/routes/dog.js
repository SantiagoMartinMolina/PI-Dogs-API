const { Router } = require('express');
const router = Router();
const { Breed } = require('../db.js');
router.post('/', async (req, res) => {
	const { name, height, weight, life_span, image, temperaments } = req.body;
	if (temperaments.length === 0) {
		return res.sendStatus(500);
	}
	try {
		let newBreed = await Breed.create({
			name,
			height,
			weight,
			life_span,
			image: image || 'https://images.unsplash.com/photo-1423958950820-4f2f1f44e075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
		});
		await newBreed.addTemperament(temperaments);
		res.json(newBreed);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;

