POST http://localhost:3000/login
{
  "username": "admin",
  "password": "admin"
}
HTTP 200
[Asserts]
jsonpath "$.message" == "Login successful"
[Captures]
token: jsonpath "$.token"

POST http://localhost:3000/todo
Authorization: Bearer {{token}}
{
  "title": "Make a todo app",
  "description": "This is a todo app",
  "done": false
}

HTTP 200
[Asserts]
jsonpath "$.message" == "Todo created"
