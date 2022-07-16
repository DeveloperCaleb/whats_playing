const { select } = require("../db/connection");
const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const mapReviews = mapProperties({
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

function read(review_id) {
  return knex("reviews").select("*").where({ review_id }).first();
}

function update(updatedReview) {
  return knex("reviews as r")
    .select("r.*")
    .where({ "r.review_id": updatedReview.review_id })
    .update({
      content: updatedReview.content,
      score: updatedReview.review,
    });
}

function readUpdatedReview(reviewId) {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("r.*", "c.*")
    .where({ "r.review_id": reviewId })
    .first()
    .then(mapReviews);
}

module.exports = {
  read,
  update,
  readUpdatedReview,
};
