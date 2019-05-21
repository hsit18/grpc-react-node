# GRPC with ReactJS and NodeJS
## Prerequisites:
 1. Node
 2. Docker (to run the envoy proxy).

## To run the application:
 1. Clone the repo
 2. Install dependencies: npm install 
 3. Run below commands to run the envoy proxy.
		a. docker build --no-cache -t learn-grpc-web .
		b. docker run -d -p 9090:9090 -p 9901:9901 learn-grpc-web
 4. Start node server: node server/index.js (it runs on port: 8080)
 5. Start react app: npm run start
 6. It will launch the react application.
 7. Here you can play with application by clicking on buttons (Click Me & Get users) to see the grpc communication with node server. 
 
## GRPC - ReactJS  (GRPC communication between WEB (ReactJS) & node server)
 1. **Hello World**
	 a. Click on "Click Me" button, it will get the message from node server(server/index.js)
 2. **Users module**
	 a. Click on "Get Users" button, it will fetch the list of users from node server(server/index.js) 

## GRPC - Node Client (GRPC communication between 2 node server)
 For **Users Module**, CRUD operations can be performed by running the node files under server/client/*.js(except index.js)
Examples:
	 To add new user: node server/client/insert_user.js
