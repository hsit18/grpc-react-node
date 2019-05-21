var grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const crypto = require("crypto");

const helloPackageDefinition = protoLoader.loadSync(
  "src/proto/hello/hello.proto"
);
const helloProto = grpc.loadPackageDefinition(helloPackageDefinition);

const usersPackageDefinition = protoLoader.loadSync(
  "src/proto/users/users.proto"
);
const usersProto = grpc.loadPackageDefinition(usersPackageDefinition);

const server = new grpc.Server();

//Start: Hello Service
function doSayHello(call, callback) {
  console.log(call);
  callback(null, {
    message: "Hello! " + call.request.name
  });
}

server.addService(helloProto.helloworld.Greeter.service, {
  sayHello: doSayHello
});
//END: Hello Service

//Start: USERS Service
const users = [
  { id: "1", name: "Dan abramov", description: "React" },
  { id: "2", name: "Andrew Clark", description: "Core facebook" }
];

server.addService(usersProto.UserService.service, {
  list: (_, callback) => {
    callback(null, {users});
  },
  get: (call, callback) => {
    let user = users.find(u => u.id == call.request.id);
    if (user) {
      callback(null, user);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      });
    }
  },
  insert: (call, callback) => {
    const id = crypto.randomBytes(16).toString("hex");
    let user = call.request;
    user.id = id;
    users.push(user);
    callback(null, user);
  },
  update: (call, callback) => {
    let existingUser = users.find(u => u.id == call.request.id);
    if (existingUser) {
      existingUser.name = call.request.name;
      existingUser.description = call.request.description;
      debugger;
      callback(null, existingUser);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      });
    }
  },
  delete: (call, callback) => {
    let existingUserIndex = users.findIndex(u => u.id == call.request.id);
    if (existingUserIndex != -1) {
      users.splice(existingUserIndex, 1);
      callback(null, {});
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      });
    }
  }
});
//END: USERS Service

server.bind("localhost:8080", grpc.ServerCredentials.createInsecure());
server.start();
