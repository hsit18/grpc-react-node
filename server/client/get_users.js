const client = require("./index");
client.list({}, (error, users) => {
  if (!error) {
    console.log("successfully fetch List users");
    console.log(users);
  }
});
