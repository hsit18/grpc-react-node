var grpc = require('grpc');
var helloProto = grpc.load('src/proto/hello.proto');
var server = new grpc.Server();

function doSayHello(call, callback) {
  callback(null, {
    message: 'Hello! ' + call.request.name
  });
}

server.addService(helloProto.helloworld.Greeter.service, {
  sayHello: doSayHello,
});

server.bind('localhost:8080',grpc.ServerCredentials.createInsecure());
server.start();