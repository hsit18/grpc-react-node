import React, { useState } from "react";

const { HelloRequest, HelloReply } = require("./proto/hello/hello_pb.js");
const { GreeterClient } = require("./proto/hello/hello_grpc_web_pb.js");

const HelloApp = () => {
  const [text, setText] = useState("");

  const callHelloGrpcService = () => {
    const client = new GreeterClient("http://localhost:9090");
    const request = new HelloRequest();
    request.setName("World");

    client.sayHello(request, {}, (err, response) => {
      console.log(response.getMessage());
      setText(response.getMessage());
    });
  };
  return (
    <React.Fragment>
      <div className="row mt-3">
        Click on button to get the message
        <button className="btn btn-info btn-sm ml-3" onClick={callHelloGrpcService}>
          Click Me
        </button>
      </div>
      <div className="row">
        Message: {text}
      </div>
    </React.Fragment>
  );
};

export default HelloApp;
