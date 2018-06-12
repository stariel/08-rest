![cf](https://i.imgur.com/7v5ASc8.png) Lab 08: REST
======

## Learning Objectives  
* students will learn to use promise constructs to manage asynchronous code
* students will learn to create a vanilla RESTful API

#### Feature Tasks
* create the following directories to organize your code:
  * `src`
  * `src/lib`
  * `src/api`
  * `__test__`
* create an HTTP server using the native NodeJS `http` module
* create a custom parser module that:
  * uses promises to parse the JSON body of `POST` and `PUT` requests
  * uses the NodeJS `url` and `querystring` modules to parse the request url
* create a router constructor that allows you to register custom routes for `GET`, `POST`, `PUT`, and `DELETE` requests
* create a router constructor that handles requests to `GET`, `POST`, `PUT`, and `DELETE` using the custom routes defined

## Server Endpoints
### `/api/v1/simple-resource-name`
**These will be "proof of life" endpoints, to prove server health**

NOTE: simple-resource-name is left up to you. E.g. dog, cat, whatever...

* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request 
 * return a 200 response with the POST'd JSON as the content
 * (Prove that you got the JSON from the POST)
* `PUT` request
 * pass `?id=<uuid>` as a query string parameter to identify a specific resource
  * pass data as stringifed JSON in the body of a **PUT** request 
  * return a 200 response with the JSON as the content
  * (Prove that you got the JSON from the PUT)
* `GET` request
 * pass `?id=<uuid>` as a query string parameter to identify a specific resource
 * return a 200 response, and a message that states "ID: <id>" was requested
 * (Prove that you got the id from the query string)
 * `DELETE` request
  * pass `?id=<uuid>` as a query string parameter to identify a specific resource
  * return a 200 response, and a message that states "ID: <id>" was deleted
  * (Prove that you got the id from the query string)
  
## Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body
