import express, { Express, Response, Request } from "express";

//? Environment Variables
import dotenv from 'dotenv';

//? Security
import cors from 'cors';
import helmet from 'helmet';

// TODO: HTTPS

//? Root Router
import router from '../routes'; // -> importa por defecto el index de la carpeta



//? Create Express APP
const app: Express = express();

//Define SERVER to use "/api" and use root Router from 'index.ts' in routes
// From this point onover: http://localhost:8080/api/...
app.use('/api', router);

// TODO: Mongoose Connection


//? Security Config
app.use(helmet());
app.use(cors());

//? Content Type
//extended => permite añadir más propiedades....
//limit => permite limitar los mb que envía/recibe nuestro server, por si queremos controlarlo
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

//? Redirection Config
//http://localhost:8080/ ==> http://localhost:8080/api/
app.get('/', (req: Request, res: Response) => {
  //redireccionamos a la siguiente dirección
  res.redirect('/api');
})


export default app;