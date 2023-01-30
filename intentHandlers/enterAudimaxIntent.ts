import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function EnterAudimaxIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   responseBuilder.addMessage("kmklsdfsdf")
   responseBuilder.addContext("klmsdlkf", 0)
   
   return responseBuilder.build();
}