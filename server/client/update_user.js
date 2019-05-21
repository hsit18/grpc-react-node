const client = require("./index");

const updateUser = {
  id: "1",
  name: "Bob",
  description: "Uncle Bob"
};

client.update(updateUser, (error, user) => {
  if (!error) {
    console.log("User has been updated successfully", user);
  } else {
    console.error(error);
  }
});
