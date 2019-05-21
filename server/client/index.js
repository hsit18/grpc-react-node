const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('../../src/proto/users/users.proto');
const UserService = grpc.loadPackageDefinition(packageDefinition).UserService;

const client = new UserService('localhost:8080',
    grpc.credentials.createInsecure());

module.exports = client