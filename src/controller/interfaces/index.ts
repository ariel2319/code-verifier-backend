import { BasicResponse } from "../types";


export interface IHelloController {
  //aquí van las utilidades de la interface
  getMessage(name?: string): Promise<BasicResponse> 

}