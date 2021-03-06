const { Router } = require("express");
const tagsRoutes = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const TagsController = require("../controller/TagsController");

const tagsController = new TagsController;

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);
tagsRoutes.delete("/", ensureAuthenticated, tagsController.delete);


module.exports = tagsRoutes;