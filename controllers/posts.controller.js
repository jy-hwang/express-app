function getPostList(req, res) {
  res.send('<div><h1>Post Title</h1><p>This is a post</p></div>');
}


module.exports = {
  getPostList: getPostList,
  /*getPost: getPost,
  createPost: createPost,
  updatePost: updatePost,
  deletePost: deletePost*/
}
