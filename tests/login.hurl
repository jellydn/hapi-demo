POST http://localhost:3000/login
{
  "username": "admin",
  "password": "test"
}

HTTP 401
[Asserts]
jsonpath "$.message" == "Invalid username or password"

POST http://localhost:3000/login
{
  "username": "admin",
  "password": "admin"
}
HTTP 200
[Asserts]
jsonpath "$.message" == "Login successful"

