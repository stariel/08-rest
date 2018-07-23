[![Build Status](https://travis-ci.com/stariel/08-rest.svg?branch=master)](https://travis-ci.com/stariel/08-rest)
=====



## Server Endpoints
### `/api/v1/cats`

This server supports the following routes:

* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request 
* `PUT` request
 * pass `?id=<uuid>` as a query string parameter to identify a specific cat
  * pass data as stringifed JSON in the body of a **PUT** request 
* `GET` request
 * pass `?id=<uuid>` as a query string parameter to identify a specific cat
 * `DELETE` request
  * pass `?id=<uuid>` as a query string parameter to identify a specific cat
