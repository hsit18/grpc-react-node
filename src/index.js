import React from "react";
import ReactDOM from "react-dom";

const { HelloRequest, HelloReply } = require("./proto/hello_pb.js");
const { GreeterClient } = require("./proto/hello_grpc_web_pb.js");

const callHelloGrpcService = () => {
  const client = new GreeterClient("http://localhost:9090");
  const request = new HelloRequest();
  request.setName("World");

  client.sayHello(request, {}, (err, response) => {
    console.log(response.getMessage());
  });
};

const App = () => (
  <div>
    Testing Hello World grpc
    <button style={{ padding: 10 }} onClick={callHelloGrpcService}>
      Click for grpc request
    </button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
