// controllers/api/movie-routes.js
const router = require('express').Router();
const { Movie } = require('../../models');

// Route to get two random movies
router.get('/random', async (req, res) => {
  try {
    const movies = await Movie.findAll({
      order: sequelize.random(),
      limit: 2,
    });
    res.json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;