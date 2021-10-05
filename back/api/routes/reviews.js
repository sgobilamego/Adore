const controller = require("../controllers/reviews")

module.exports = function (app) {
    app.post("/reviews", controller.inserirReview);
    app.get("/reviews", controller.listarReviews );
    app.delete("/reviews/:id", controller.removerReview);
}