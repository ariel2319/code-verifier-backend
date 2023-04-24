/**
 * Root Router
 * Redirections to Routers
 */

//acá llegan las peticiones de /API y direccionar hacia donde van, ya sea "hello", "user".....

import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "../utils/logger";

//Server Instance
let app = express(); // -> nos permite elegir a qué dirección enviar las consultas

//Router Instance
let rootRouter = express.Router();

//Activate for resuests to http://localhost:8080/api
//GET: http://localhost:8080/api (raíz)
rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('GET: // http://localhost:8080/api/')
  //Send Hello World
  res.send('Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});

//Redirections to Routers & Controllers
//usamos la función USE
app.use('/', rootRouter); // http://localhost:8080/api/
app.use('/hello', helloRouter); // http://localhost:8080/api/hello  -> gestionadas por Hello Router

//TODO: add more routes NEXT

export default app;