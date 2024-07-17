const fs = require("fs");
const path = "./database/auth.database.json";

const getUsers = () => {
  const raw_data = fs.readFileSync(path);
  const data = JSON.parse(raw_data);
  return data;
};

const updateUsers = (users, user) => {
  if (getUser(users, user) != null) {
    throw "Username already exists";
  }
  users.push(user);
  fs.writeFileSync(path, JSON.stringify(users));
};

const getUser = (users, user) => {
  return users.find((u) => u.username == user.username);
};

exports.signup = async (u, p) => {
  const req = { username: u, password: p };
  const users = getUsers();

  try {
    updateUsers(users, req);
  } catch (e) {
    throw e;
  }
};

exports.login = async (u, p) => {
  const req = { username: u, password: p };
  const users = getUsers();
  const user = getUser(users, req);

  if (user == null) {
    throw "Invalid Username or Password.";
  }

  if (user.password != req.password) {
    throw "Invalid Username or Password.";
  }
};
