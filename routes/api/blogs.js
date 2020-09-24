const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const multer = require("multer");
const cloudinary = require("../../config/cloudinary");

// Post model
const Blog = require("../../models/Blog");
// Profile model
const Profile = require("../../models/Profile");

// Validation
const validateBlogInput = require("../../validation/blog");

//IMAGE UPLOAD CONFIGURATION
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
const imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are accepted!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Blogs Works" }));

// @route   GET api/blogs
// @desc    Get blogs
// @access  Public
router.get("/", (req, res) => {
  Blog.find()
    .sort({ date: -1 })
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(404).json({ nopostsfound: "No blogs found" }));
});

// @route   GET api/blogs/:id
// @desc    Get blog by id
// @access  Public
router.get("/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => res.json(blog))
    .catch((err) =>
      res.status(404).json({ nopostfound: "No blog found with that ID" })
    );
});

// @route   POST api/blogs
// @desc    Create blog
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  (req, res) => {
    const { errors, isValid } = validateBlogInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    cloudinary.v2.uploader.upload(req.file.path, function (err, result) {
      if (err) {
        req.json(err.message);
      }

      req.body.image = result.secure_url;
      // add image's public_id to image object
      req.body.imageId = result.public_id;

      image = req.body.image;
      imageId = req.body.imageId;

      const newBlog = new Blog({
        title: req.body.title,
        text: req.body.text,
        image: req.body.image,
        imageId: req.body.imageId,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id,
      });

      newBlog.save().then((blog) => res.json(blog));
    });
  }
);

// @route   DELETE api/blogs/:id
// @desc    Delete blog
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      Blog.findById(req.params.id)
        .then((blog) => {
          // Check for blog owner
          if (blog.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          blog.remove().then(() => res.json({ success: true }));
        })
        .catch((err) =>
          res.status(404).json({ postnotfound: "No blog found" })
        );
    });
  }
);

module.exports = router;
