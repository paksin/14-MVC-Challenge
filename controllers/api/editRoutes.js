const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
  try {
    const newPost = await Post.update(
      {
        ...req.body,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
