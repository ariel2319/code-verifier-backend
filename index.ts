//* import default => si coloco el nombres express a continuación de import, es como asignarle la importación a esa variable
import dotenv from 'dotenv';
import app from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';

//? Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8080;

//? Execute server
app.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`);
});

//? Control server
app.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error} `);
})