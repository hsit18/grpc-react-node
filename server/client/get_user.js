const client = require("./index");

client.get({ id: "1" }, (error, user) => {
  if (!error) {
    console.log("User feched successfully", user);
  } else {
    console.error(error);
  }
});
