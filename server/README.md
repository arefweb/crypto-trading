## Authentication process:
1. User should be logged-in, in order to access the
private routes.
2. At first entrance if user doesn't have any token
we redirect him to login form where he should enter 
his credentials.
3. If user doesn't have any account, instead of login
he should create a new account. We should present him a
signup form where he can enter his username and 
password for that reason.
4. With each and every request of the user to the server
we should check the existence and validity of his token.
this process on API routes is done through "Middlewares".
5. At first entrance (signup) we will generate a 
refresh-token for the user. then we will redirect him
to the login page, so that after login we can generate
an access token for him. Actually this access token is 
checked in every request and sent with every request.
6. If access token is expired we receive a specific 
error status (like 401). Then we should make a new
request to the server with the refresh-token, in order
to receive a new access token. Then immediately after 
receiving the new access token we retry the previously 
failed request. This request's config should be
preserved in order for that retry.

#### Based on above explanation we need these routes:
* /api/signup [POST]

      body: {
        username: "John@gmail.com",
        password: "1234",
      }
* /api/login [POST]
* /api/refresh [POST]
* /api/private [GET]

#### And we need this middleware for private routes:
`verifyToken()`

**`verifyToken` middleware checks:**
- if token exists, else return 401 error.
- if token is valid( JWT decrypt and life span ), else
return 401 error.
- if everything about token is OK, then proceed to the
`next()` function.

---
**! Note**

For this project we are not going to use any database 
and simply store the data in a json file and read from
that file.
