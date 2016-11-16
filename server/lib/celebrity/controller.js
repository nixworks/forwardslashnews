// This would connect to real data.
const db = require('../../db');

// route params are good place to set things on the req object.
exports.params = (req, res, next, id) => {
  db.byId(id)
    .then((post) => {
      if (!post) {
        next(new Error('No post with that id'));
      } else {
        req.post = post;
        next();
      }
    }, (err) => {
      next(err);
    });
};

exports.get = (req, res, next) => {
  console.log(`Calling find { category: 'Celebrity' }`)
  db.find({ category: 'Celebrity' })
    .then((posts) => {
      res.render('celebrity-list', { posts });
    }, (err) => {
      next(err);
    });
};

exports.getOne = (req, res, next) => {
  console.log('getOne');
  const post = req.post;
  res.render('celebrity-item', { post });
};

