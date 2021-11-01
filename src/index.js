"use strict";

const { graphql, buildSchema } = require("graphql");
const express = require("express");
const gqlMiddleware = require("express-graphql");

const app = express();
const port = process.env.port || 3000;

//Definiendo el schema
const schema = buildSchema(`
    type Query {
        hello: String,
        year: Int
    }
`);

const resolvers = {
  hello: () => "Hola mundo",
  year: () => 1,
};

// Ejecutar el query
// Le pasamos el schema como primer parametro
// le pasamos la consulta como segundo parametro
// nos retorna una promesa con un objeto data
// graphql(schema, "{year}", resolvers)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.error(e));

app.use(
  "/api",
  gqlMiddleware({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api/v1/`);
});
