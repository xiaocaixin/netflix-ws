const fs = require("fs");
const path = "./database/auth.database.json";

const getUsers = () => {
  const raw_data = fs.readFileSync(path);
  const data = JSON.parse(raw_data);
  return data;
};

const updateUsers = (users, user) => {
  users.push(user);
  fs.writeFileSync(path, JSON.stringify(users));
};

const signup = async (u, p) => {
  const user = { username: u, password: p };

  const users = getUsers();
  try {
    updateUsers(users, user);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  signup,
};
