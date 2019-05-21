/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./users_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.UserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.UserList>}
 */
const methodInfo_UserService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UserList,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserList.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/List',
      request,
      metadata || {},
      methodInfo_UserService_List,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UserList>}
 *     A native promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/List',
      request,
      metadata || {},
      methodInfo_UserService_List);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UserRequestId,
 *   !proto.User>}
 */
const methodInfo_UserService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.User,
  /** @param {!proto.UserRequestId} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @param {!proto.UserRequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/Get',
      request,
      metadata || {},
      methodInfo_UserService_Get,
      callback);
};


/**
 * @param {!proto.UserRequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.User>}
 *     A native promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/Get',
      request,
      metadata || {},
      methodInfo_UserService_Get);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.User,
 *   !proto.User>}
 */
const methodInfo_UserService_Insert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.User,
  /** @param {!proto.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @param {!proto.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.insert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/Insert',
      request,
      metadata || {},
      methodInfo_UserService_Insert,
      callback);
};


/**
 * @param {!proto.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.User>}
 *     A native promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.insert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/Insert',
      request,
      metadata || {},
      methodInfo_UserService_Insert);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.User,
 *   !proto.User>}
 */
const methodInfo_UserService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.User,
  /** @param {!proto.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @param {!proto.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/Update',
      request,
      metadata || {},
      methodInfo_UserService_Update,
      callback);
};


/**
 * @param {!proto.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.User>}
 *     A native promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/Update',
      request,
      metadata || {},
      methodInfo_UserService_Update);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UserRequestId,
 *   !proto.Empty>}
 */
const methodInfo_UserService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Empty,
  /** @param {!proto.UserRequestId} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.UserRequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/Delete',
      request,
      metadata || {},
      methodInfo_UserService_Delete,
      callback);
};


/**
 * @param {!proto.UserRequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     A native promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/Delete',
      request,
      metadata || {},
      methodInfo_UserService_Delete);
};


module.exports = proto;

