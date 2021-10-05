const controller = require("../controllers/faqs")

module.exports = function (app) {
    app.post("/faqs", controller.inserirFaq);
    app.get("/faqs", controller.listarFaqs );
    app.delete("/faqs/:id", controller.apagarFaq);
}