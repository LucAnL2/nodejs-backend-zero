const getHomePage = (req, res) => {
  res.send("Welcome to the Home Page!");
};
const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getSamplePage: getSamplePage,
};
