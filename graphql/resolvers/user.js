export default {
  Query: {
    user: (parent, { id }, { models }) => models.User.findByPk(id),
    users: (parent, args, { models }) => models.User.findAll(),
  },
  User: {
    articles: parent => parent.getArticles()
  },
};