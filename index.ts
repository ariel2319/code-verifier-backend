//? import default => si coloco el nombres express a continuación de import, es como asignarle la importación a esa variable
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

//COnfiguration the .env file
dotenv.config();

//Create the first app of expres type
const app: Express = express();
const port: string | number = process.env.PORT || 8080; //damos la opción x sino está disponible el env

//Define the first Route of APP
app.get('/', (req: Request, res: Response) => {
  //Send Hello WORLD!
  res.send('Hello WORLD!!! APP Express + TS + Nodemon + Jest + Swagger + Moongose')
}); //=> localhost:8000/

app.get('/hello', (req: Request, res: Response) => {
  //Send Hello WORLD!
  res.send('Hello WORLD!!!')
}); //=> localhost:8000/hello


//Execute APP and Listen Requests to PORT
app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})
