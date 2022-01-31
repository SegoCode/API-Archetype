
<p align="center">
  <img src="https://github.com/SegoCode/Express-api-rest-archetype/blob/main/media/header-alternative.png" alt="Express x Node.js"/>
</p>


## RESTful API stateless boilerplate
Starter project for my future RESTful APIs and microservices, also to learn Node.js and apply good practices 


## Features
 - Easy editable clean architecture highly scalable
 - Custom logger with file rotation and error trace
 - No transpilers, just vanilla javascript
 - JWT authentication with different roles
 - Profiles for any environment
 - Health and status microservice
 - Production deploy ready with pm2
 - Customizable logs or pm2 standard  
 - Request validation
 - Testing with junit
 - Using many internet standards
 - Fully integrated with PM2 monitoring and clustering
 - Securized HTTP headers


## Work in progress
- [ ] DB Conector
- [ ] Swagger documentation
- [ ] nginx config file
- [ ] Cache
- [ ] Code coverage

## Getting Started

```sh
# HTTPS
$ git clone https://github.com/SegoCode/Express-api-rest-archetype.git
```
```sh
cd Express-api-rest-archetype
```
```sh
# Auto run 'npm ci' 
npm run dev
```

## 2xx Success 

2xx codes are returned for requests that were understood and processed successfully.

| Code | Text | Purpose |
|-|-|-|
| **200** | **OK** | For successful `GET` and `PUT` requests. |
| **201** | **Created** | For a successful `POST` request. |
| **204** | **No Content** | For a successful request that produced no response (such as `DELETE` requests). |

## 4xx Client Error 

4xx codes are returned for requests that could not be processed due to problems with the request or the data.

| Code | Text | Purpose |
|-|-|-|
| **400** | **Bad Request** | Issued when a malformed request was sent.
| **401** | **Unauthorized** | This response is sent when your client failed to provide credentials or its credentials were invalid. |
| **403** | **Forbidden** | Returned when permissions do not allow the operation. 
| **404** | **Not Found** | When a particular resource doesn’t exist or couldn’t be found. |
| **405** | **Method Not Allowed** | The resource was found, but doesn’t support any action. |
| **409** | **Conflict** | A change requested by the client is being rejected, due to a condition imposed by the server. The exact reasons for this response will vary from one resource to the next. An example might be attempting to delete a category whose deletion would cause products to be orphaned. Additional information about the conflict, and about how to resolve it, might be available in the response's `details` section. |
| **413** | **Request Entity Too Large** | When the client requests too many objects. For example, the `limit` parameter exceeded the maximum. |
| **429** | **Too Many Requests** | When an OAuth client exceeds the [rate limit](TODO) for API requests to a store. |

## 5xx Server Error 

5xx codes are returned for requests that could not be processed due to an internal error with the API or server.

| Code | Text | Purpose |
|-|-|-|
| **500** | **Internal Server Error** | When an error has occurred within the API. |
| **503** | **Service Unavailable** | When the store is marked as “Down for Maintenance,” or the store is being upgraded to a new version. |




