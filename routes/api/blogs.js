const express = require('express');
const router = express.Router();
const upload = require('../../uploader');
const cloudinary = require('../../config/cloudinary');

const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const checkObjectId = require('../../middleware/checkObjectId');

//models
const User = require('../../models/User');
const Blog = require('../../models/Blog');

//upload image
router.post('/image', auth, upload.single('file'), async (req, res) => {
  try {
    await cloudinary.v2.uploader.upload(req.file.path, (err, result) => {
      if (err) {
        req.json(err.message);
      }

      req.body.filePath = result.secure_url;
      return res.json({
        success: true,
        filePath: req.body.filePath
      });
    });
  } catch (error) {
    console.log(error);
  }
});

// @route    Blog api/blogs
// @desc     Create a blog
// @access   Private

router.post(
  '/',
  [
    auth,
    [
      check('text', 'Text field is required').not().isEmpty(),
      check('title', 'Please include a title to the blog').not().isEmpty(),
      check('filePath', 'Please upload an image').not().isEmpty()
    ]
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new Blog({
        text: req.body.text,
        title: req.body.title,
        filePath: req.body.filePath,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const blog = await newPost.save();

      res.json(blog);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/blogs
// @desc     Get all blogss
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/blogs/:id
// @desc     Get blog by ID
// @access   Private
router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ msg: 'Blog not found' });
    }

    res.json(blog);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/blogs/:id
// @desc     Delete a blog
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ msg: 'Blog not found' });
    }

    // Check user
    if (blog.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await blog.remove();

    res.json({ msg: 'Blog removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    PUT api/blogs/like/:id
// @desc     Like a blog
// @access   Private
router.put('/like/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    // Check if the blog has already been liked
    if (blog.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Blog already liked' });
    }

    blog.likes.unshift({ user: req.user.id });

    await blog.save();

    return res.json(blog.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/blogs/unlike/:id
// @desc     Unlike a blog
// @access   Private
router.put('/unlike/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    // Check if the blog has not yet been liked
    if (!blog.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'blog has not yet been liked' });
    }

    // remove the like
    blog.likes = Blog.likes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    await blog.save();

    return res.json(blog.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    blog api/blogs/comment/:id
// @desc     Comment on a blog
// @access   Private
router.post(
  '/comment/:id',
  [
    auth,
    checkObjectId('id'),
    [check('text', 'Text is required').not().isEmpty()]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const blog = await Blog.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      blog.comments.unshift(newComment);

      await blog.save();

      res.json(blog.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/blogs/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    // Pull out comment
    const comment = blog.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    blog.comments = blog.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );

    await blog.save();

    return res.json(blog.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
