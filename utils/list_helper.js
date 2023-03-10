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
  const { title, author, likes } = blogs.reduce((favorite, blog) =>
    blog.likes > favorite.likes ? blog : favorite
  );
  return { title, author, likes };
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

const mostLikes = (blogs) => {
  if (blogs.length === 0) return;
  const authorsObject = _.groupBy(blogs, "author");
  const authorsList = _.map(authorsObject, (blogs, author) => {
    return { author, likes: _.sumBy(blogs, "likes") };
  });
  const sortedList = _.orderBy(authorsList, "likes", "desc")[0];
  return sortedList;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
