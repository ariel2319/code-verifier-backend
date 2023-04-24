
//el type lo podemos especificar como queramos => definimos solo un tipo, nada más, la estructura de un mensaje

/**
 * Basic JSON response for Controllers
 */
export type BasicResponse = {
  message: string;
} //=> este json es para respuestas 


/**
 * Error JSON response for Controllers
 */
export type ErrorResponse = {
  error: string;
  message: string;
}


//! estos type se utilizan para darle un tipo al JSON cuando responda una consulta