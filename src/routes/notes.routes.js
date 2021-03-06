const { Router } = require("express");
const notesRoutes = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const NotesController = require("../controller/NotesController");

const notesController = new NotesController;


notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/", notesController.index);
notesRoutes.put("/:id", notesController.update);


module.exports = notesRoutes;