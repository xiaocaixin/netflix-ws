const fs = require("fs");
const path = "./database/auth.database.json";

const { signJwt } = require("../services/jwt.service");

const getUsers = () => {
  const raw_data = fs.readFileSync(path);
  const data = JSON.parse(raw_data);
  return data;
};

const updateUsers = (users, user) => {
  if (getUser(users, user) != null) {
    throw "Email already exists";
  }
  users.push(user);
  fs.writeFileSync(path, JSON.stringify(users));
};

const getUser = (users, user) => {
  return users.find((u) => u.email == user.email);
};

exports.signup = async (e, p) => {
  const req = { email: e, password: p };
  const users = getUsers();

  try {
    updateUsers(users, req);
  } catch (e) {
    throw e;
  }
};

exports.login = async (e, p) => {
  const req = { email: e, password: p };
  const users = getUsers();
  const user = getUser(users, req);

  if (user == null) {
    throw "Invalid Email or Password.";
  }

  if (user.password != req.password) {
    throw "Invalid Email or Password.";
  }

  return signJwt(user.email, user.password);
};
