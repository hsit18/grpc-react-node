const client = require("./index");
let newUser = {
  name: "Harpreet Singh",
  description: "UI Developer"
};

client.insert(newUser, (error, user) => {
  if (!error) {
    console.log("New User created successfully", user);
  } else {
    console.error(error);
  }
});
