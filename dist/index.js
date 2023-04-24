"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//* import default => si coloco el nombres express a continuación de import, es como asignarle la importación a esa variable
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./src/server"));
const logger_1 = require("./src/utils/logger");
//? Configuration the .env file
dotenv_1.default.config();
const port = process.env.PORT || 8080;
//? Execute server
server_1.default.listen(port, () => {
    (0, logger_1.LogSuccess)(`[SERVER ON]: Running in http://localhost:${port}/api`);
});
//? Control server
server_1.default.on('error', (error) => {
    (0, logger_1.LogError)(`[SERVER ERROR]: ${error} `);
});
//# sourceMappingURL=index.js.map