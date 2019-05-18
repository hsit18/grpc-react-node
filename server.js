var grpc = require('grpc');
var pingPongProto = grpc.load('ping_pong.proto');
var helloProto = grpc.load('protofiles/hello.proto');
var server = new grpc.Server();

function doSayHello(call, callback) {
  callback(null, {
    message: 'Hello! ' + call.request.name
  });
}

server.addService(pingPongProto.pingpong.PingPongService.service, {
  pingPong: function(call,callback) {
    console.log("Request")
    return callback(null,{pong:"Pong"})
  }
});

server.addService(helloProto.helloworld.Greeter.service, {
  sayHello: doSayHello,
});

server.bind('localhost:8080',grpc.ServerCredentials.createInsecure());
server.start();