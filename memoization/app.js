const users = require('./data/user');
const blogs = require('./data/blog');

const memoize = require('./memoize');

const getUser = function (id) {
  // console.log(`Fetching detail for user id - ${id}`);
  return users.find(user => user.id === id);
};

// Memoized getUser function
const memoizedGetUser = memoize(getUser);

const showBlogs = function () {
  const blogDetail = blogs.map(blog => {
    blog.author = memoizedGetUser(blog.author);
    return blog;
  });
  return blogDetail;
};

console.log(showBlogs());
console.log(blogs);
