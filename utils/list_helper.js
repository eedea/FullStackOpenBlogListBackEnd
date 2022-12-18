const _ = require("lodash");

const dummy = (blogs) => {
  // ...
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return;
  return blogs.reduce((favorite, blog) =>
    blog.likes > favorite.likes ? blog : favorite
  );
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return;
  const authorsObject = _.countBy(blogs, "author");
  const authorsList = _.map(authorsObject, (blogs, author) => {
    return { author, blogs };
  });
  const sortedList = _.orderBy(authorsList, "blogs", "desc")[0];
  return sortedList;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
