import React, { useState } from "react";

const { Empty, UsersReply } = require("./proto/users/users_pb.js");
const { UserServiceClient } = require("./proto/users/users_grpc_web_pb.js");

const HelloApp = () => {
  const [users, setUsers] = useState([]);

  const getUsersGrpcService = () => {
    const client = new UserServiceClient("http://localhost:9090");
    const request = new Empty();

    client.list(request, {}, (err, response) => {
      console.log(response.getUsersList());
      setUsers(response.getUsersList());
    });
  };

  return (
    <React.Fragment>
      <div className="row mt-8">
        Click on button to get users list
        <button
          className="btn btn-info btn-sm ml-3"
          onClick={getUsersGrpcService}
        >
          Get Users
        </button>
      </div>
      <div className="row">
        <div className="col col-lg-6">users</div>
        <div className="col col-lg-6">
          <ul className="list-group">
            {users.map(u => (
              <li className="list-group-item">{`${u.getId()}: ${u.getName()}- ${u.getDescription()}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HelloApp;
