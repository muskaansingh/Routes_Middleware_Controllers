const postController = require("../controller/post.js");
const express = require("express");

const router = express.Router();

const getPosts = (req, res) => {
    //
}

router.get('/', postController.getPosts);
module.exports = router;

//This entire route file work as a middleware into our application.

//We extract the logic from the routes to the controller.