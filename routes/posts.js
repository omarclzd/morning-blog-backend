var express = require("express");
var router = express.Router();
var postCtrl = require("../controllers/posts");

/* GET users listing. */
// router.get("/posts", postCtrl.getAllPosts);
router.get("/", function(req, res, next) {
  // Comment out this line:
  res.send("respond with a resource");

  // And insert something like this instead:
});

module.exports = router;
