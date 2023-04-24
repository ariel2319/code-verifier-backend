import express, { Request, Response } from "express";
import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";

// Router from express 
let helloRouter = express.Router();


//* http://localhost/api/hello?name=ariel/
helloRouter.route('/api')
  //* GET  
  .get(async (req: Request, res: Response) => {
    //Obtain a Query Param -> sirven para hacer consultas
    let name: any = req?.query.name;
    LogInfo(`Query Param: ${name}`);

    //Controller instance to execute method
    const controller: HelloController = new HelloController();

    //Obtain Response -> consumiendo la promesa del controlador
    const response = await controller.getMessage(name);

    //Send to the client the response
    return res.send(response);
  })

//Export Hello Router

export default helloRouter;