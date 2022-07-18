const reviewsServices = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const { json } = require("express");

//middleware
async function reviewExist(req, res, next) {
  const { reviewId } = req.params;

  const review = await reviewsServices.read(reviewId);

  if (review) {
    res.locals.review = review;

    return next();
  } else next({ status: 404, message: "Review cannot be found" });
}

//handlers

async function update(req, res, next) {
  const updatedReview = {
    ...req.body.data,
    review_id: res.locals.review.review_id,
  };

  await reviewsServices.update(updatedReview);

  next();
}

async function readUpdatedReview(req, res) {
  const { reviewId } = req.params;

  const data = await reviewsServices.readUpdatedReview(reviewId);

  res.json({ data });
}

async function destroy(req, res) {
  const { reviewId } = req.params;
  await reviewsServices.destroy(reviewId);
  res.sendStatus(204);
}
module.exports = {
  update: [
    asyncErrorBoundary(reviewExist),
    asyncErrorBoundary(update),
    asyncErrorBoundary(readUpdatedReview),
  ],
  delete: [asyncErrorBoundary(reviewExist), asyncErrorBoundary(destroy)],
};
