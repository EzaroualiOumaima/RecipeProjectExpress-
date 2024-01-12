const express = require("express");
const router = express.Router();
const recipeController = require("../Controllers/recipeController");

// Post Data
router.post("/recipes/upload", recipeController.postData);

// Get all data
router.get("/recipes", recipeController.getAllData);

// Get data by id
router.get("/recipes/:id", recipeController.getDataById);

//Update data by id
router.patch("/recipes/:id", recipeController.updateData);

// Delete Data by id
router.delete("/recipes/:id", recipeController.deleteData);


module.exports = router;
