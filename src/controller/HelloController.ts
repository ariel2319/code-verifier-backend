import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "@/utils/logger"; //"@/ === src/, lo configuramos en el tsconfig.json"

//esta clase va a gestionar las rutas

//al implementar IHelloController debemos traer su estructura
export class HelloController implements IHelloController {

  public async getMessage(name?: string): Promise<BasicResponse> {
    LogSuccess('[api/hello] Get Request');

    return {
      message: `Hello ${name || 'World!'}` //name al ser un parámetro opcional, le damos una segunda opción para responder
    }
  }

}