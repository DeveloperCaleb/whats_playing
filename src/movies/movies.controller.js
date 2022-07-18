const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//middleware
async function movieExist(req, res, next) {
  const { movieId } = req.params;

  const movie = await moviesService.read(movieId);

  if (movie) {
    res.locals.movie = movie;
    return next();
  } else next({ status: 404, message: "Movie cannot be found" });
}

//handlers
async function list(req, res) {
  const showing = req.query.is_showing;

  if (showing === "true") {
    const data = await moviesService.listShowing();
    res.json({ data });
  } else {
    const data = await moviesService.list();
    res.json({ data });
  }
}

async function read(req, res) {
  const { movie: data } = res.locals;
  res.json({ data });
}

async function listTheaters(req, res) {
  const { movieId } = req.params;

  const data = await moviesService.listTheaters(movieId);

  res.json({ data });
}

async function listMovieReviews(req, res) {
  const { movieId } = req.params;

  const data = await moviesService.listMovieReviews(movieId);

  const formattedData = data.map((review) => {
    return { critic: "test" };
  });

  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExist), read],
  listTheaters: [
    asyncErrorBoundary(movieExist),
    asyncErrorBoundary(listTheaters),
  ],
  listMovieReviews,
};
