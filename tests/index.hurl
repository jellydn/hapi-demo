GET http://localhost:3000

HTTP 200
[Asserts]
header "Content-Type" == "application/json; charset=utf-8"
cookie "hello" exists
