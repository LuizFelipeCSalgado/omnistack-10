const { Router } = require('express');
const axios = require('axios');

const DevModel = require('./models/Dev');

const routes = Router();
const githubApiUrl = 'https://api.github.com/users';

routes.post('/devs', async (request, response) => {
  const { github_username } = request.body;
  try {
    const githubUserData = await getGithubUserOverview(github_username);
    const { name = login, avatar_url, bio } = githubUserData;
    const createResponse = await DevModel.create({
      nome: name,
      github_username,
      bio,
      avatar: avatar_url,
      techs: request.body.techs,
    });
    console.log(createResponse);
    return response.send('pong');
  } catch (error) {
    return response.status(error.response.status).send(error.response.statusText);
  }
});

const getGithubUserOverview = async username => {
  try {
    const { data } = await axios.get(`${githubApiUrl}/${username}`);
    return data;
  } catch (error) {
    const { status, statusText } = error.response;
    console.error('getGithubUserOverview', status, statusText);
    throw error;
    }
};

module.exports = routes;
