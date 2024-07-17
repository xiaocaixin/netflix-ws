/*
https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
*/

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const api_routes = require("./routes/apiRoutes");
const auth_routes = require("./routes/authRoutes");

app.use("/api", api_routes);
app.use("/auth", auth_routes);

// // Swagger config
// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Your API Name",
//       version: "1.0.0",
//       description: "A short description of your API",
//     },
//   },
//   apis: ["./routes/*.js"], // Path to the API docs
// };

// const swaggerUi = require("swagger-ui-express");
// const swaggerJsdoc = require("swagger-jsdoc");

// const specs = swaggerJsdoc(options);

// module.exports = (app) => {
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// };
