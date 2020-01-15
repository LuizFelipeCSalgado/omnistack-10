const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
  nome: String,
  github_username: String,
  bio: String,
  avatar: String,
  techs: [String],
});

module.exports = mongoose.model('Dev', DevSchema);
