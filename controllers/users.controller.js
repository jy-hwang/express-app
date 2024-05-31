//import Users from "../models/users.model";

const userModel = require("../models/users.model");

function getUserList(req, res) {
  res.send(userModel);
}

function getUser(req, res) {
  const userId = Number(req.params.userId);
  const user = userModel[userId];
  if (user) {
    //res.send(user);
    res.jsonp(user);
  } else {
    res.sendStatus(404);
  }

}

function postUser(req, res) {

  if (!req.body.name) {
    //res.status(400);
    //res.send('name is required');
    return res.status(400).json({
      error: "Missing user name, please enter a username"
    });
  }

  console.log('req.body : ', req.body);
  const newUser = {
    name: req.body.name,
    id: userModel.length
  }
  userModel.push(newUser);
  res.json(newUser);
}

module.exports = {
  getUser,
  getUserList,
  postUser
}
