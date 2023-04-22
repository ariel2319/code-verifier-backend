"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//? import default => si coloco el nombres express a continuación de import, es como asignarle la importación a esa variable
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//COnfiguration the .env file
dotenv_1.default.config();
//Create the first app of expres type
const app = (0, express_1.default)();
const port = process.env.PORT || 8080; //damos la opción x sino está disponible el env
//Define the first Route of APP
app.get('/', (req, res) => {
    //Send Hello WORLD!
    res.send('Hello WORLD!!! APP Express + TS + Nodemon + Jest + Swagger + Moongose');
}); //=> localhost:8000/
app.get('/hello', (req, res) => {
    //Send Hello WORLD!
    res.send('Hello WORLD!!!');
}); //=> localhost:8000/hello
//Execute APP and Listen Requests to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map