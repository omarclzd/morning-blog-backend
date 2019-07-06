var express = require("express");
var router = express.Router();
var postCtrl = require("../controllers/posts");

/* GET users listing. */
router.get("/posts", postCtrl.getAllPosts);

module.exports = router;
