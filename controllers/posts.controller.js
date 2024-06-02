const path = require('path');

function getPostList(req, res) {
  // res.send('<div><h1>Post Title</h1><p>This is a post</p></div>');
  res.sendFile(path.join(__dirname, "..", 'public', 'images', 'cute_jordy.jpg'));
}

function getPosts(req, res) {
  res.render('posts', {
    templateName: 'post'
  })
}


module.exports = {
  getPostList: getPostList,
  getPosts: getPosts,
  /*createPost: createPost,
  updatePost: updatePost,
  deletePost: deletePost*/
}
